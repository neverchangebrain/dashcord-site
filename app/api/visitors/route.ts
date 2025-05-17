import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const existing = await prisma.visit.findFirst({
    where: { ip, visitDate: { gte: todayStart } },
  });

  if (!existing) {
    await prisma.visit.create({ data: { ip, visitDate: now } });
  }

  const visits = await prisma.visit.findMany({
    where: { visitDate: { gte: todayStart } },
    select: { ip: true },
  });

  const uniqueCount = new Set(visits.map((v) => v.ip)).size;

  return new Response(JSON.stringify({ count: uniqueCount }), {
    headers: { "Content-Type": "application/json" },
  });
}
