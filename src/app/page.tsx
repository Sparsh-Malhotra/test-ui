import ConsultationForm from "@/components/ConsultationForm";
import DoctorsList from "@/components/DoctorsList";
import Testimonials from "@/components/Testimonials";
import { DoctorsProvider } from "@/context/doctors";
import { LoadingContextProvider } from "@/context/loading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <DoctorsProvider>
      <LoadingContextProvider>
        <main className="flex flex-col min-h-screen">
          <nav className="px-24 py-4 bg-dark-1 flex justify-between items-center">
            <Image
              src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg"
              alt="logo"
              width={132.8}
              height={52.8}
            />
            <ul className="flex gap-5 items-center text-gray-200">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link
                  href="#form"
                  className="text-white font-semibold text-sm rounded-md bg-primary px-2 py-2"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
          <section className="bg-hero relative flex-grow bg-no-repeat bg-cover bg-center flex flex-col items-start justify-center">
            <div className="bg-hero-bgcolor absolute top-0 z-10 w-full h-full" />
            <div className="px-24 relative z-20 flex flex-col gap-4 w-3/4">
              <p className="font-semibold text-5xl text-white">
                Severe Back Pain?
              </p>
              <p className="text-balance text-xl text-gray-400 font-semibold">
                Book an appointment with one of our expert physiotherapists
                today and begin the journey to a pain free life
              </p>
              <Link
                href="#form"
                className="bg-primary rounded-md text-white py-2 w-1/4 font-semibold text-center"
              >
                Book Appointment
              </Link>
            </div>
          </section>
        </main>
        <Testimonials />
        <ConsultationForm />

        <DoctorsList />
      </LoadingContextProvider>
    </DoctorsProvider>
  );
}
