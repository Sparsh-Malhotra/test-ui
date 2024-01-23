import { doctorsList } from "@/constants";
import { type NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const city = searchParams.get("city");
  const doctors = doctorsList.filter((doctor) => doctor.city === city);
  return Response.json(
    {
      message: "Doctors fetched successfully",
      doctors,
    },
    {
      status: 200,
    }
  );
}
