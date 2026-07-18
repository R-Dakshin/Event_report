export async function GET() {
  return Response.json({ status: 'ok', platform: 'nextjs', database: 'mongodb' });
}
