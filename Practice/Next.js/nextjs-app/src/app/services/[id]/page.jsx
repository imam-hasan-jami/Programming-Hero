import React from "react";

export default function ServiceDetailPage({ params }) {
  const id = params.id;

  const data = [
    {
      _id: "srv_001",
      service_name: "Laptop Repair",
      service_image: "https://example.com/images/laptop-repair.jpg",
      service_description:
        "Professional hardware and software troubleshooting for laptops.",
    },
    {
      _id: "srv_002",
      service_name: "Mobile Screen Replacement",
      service_image: "https://example.com/images/mobile-screen.jpg",
      service_description:
        "Quick and affordable cracked screen replacement for all major brands.",
    },
    {
      _id: "srv_003",
      service_name: "Data Recovery",
      service_image: "https://example.com/images/data-recovery.jpg",
      service_description:
        "Recover lost photos, videos, documents, and other files from damaged devices.",
    },
    {
      _id: "srv_004",
      service_name: "Custom PC Build",
      service_image: "https://example.com/images/custom-pc.jpg",
      service_description:
        "Build your dream PC for gaming, editing, or office use based on your budget.",
    },
    {
      _id: "srv_005",
      service_name: "Software Installation",
      service_image: "https://example.com/images/software-install.jpg",
      service_description:
        "Secure installation and setup of licensed software and essential tools.",
    },
  ];

  const singleData = data.find((d) => d._id == id);

  return (
    <div>
      <h1 className="text-center mb-10">Service Detail Page</h1>
      <div className="text-lg flex flex-col justify-center">
        <p>ID: {id}</p>
        <p>Name: {singleData.service_name}</p>
        <p>Description: {singleData.service_description}</p>
      </div>
    </div>
  );
}
