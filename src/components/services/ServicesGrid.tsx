import ServiceListing from "./ServiceListing";
import { serviceData } from "@/data/services/serviceData";

export default function ServicesGrid() {
  return (
    <>
      {serviceData.map((service) => (
        <ServiceListing
          key={service.slug}
          {...service}
        />
      ))}
    </>
  );
}