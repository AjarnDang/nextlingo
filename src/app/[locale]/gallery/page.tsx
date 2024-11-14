"use client";

import React, { useState } from "react";
import { haircut } from "@/app/mockData/haircut";
import { Modal } from "antd";
import DabuzzzText from "@/components/DabuzzzText";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations("GalleryPage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const columns = [[], [], [], []];
  haircut.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="lg:mb-16 mb-8">
      <section className="text-center lg:mb-16 mb-8">
        <i className="text-primary opacity-50 font-medium text-4xl">
          {t("title")}
        </i>
        <div className="lg:text-[6rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary">
          <DabuzzzText />
        </div>
      </section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item.src)}
                className="overflow-hidden rounded-xl hover:shadow-xl transition-all"
              >
                <img
                  className="h-full max-w-full object-cover object-center cursor-pointer hover:scale-110 transition-all duration-200"
                  src={item.src}
                  alt={`Haircut ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        style={{ padding: 0 }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Full-size haircut"
            className="w-full h-auto rounded-2xl"
          />
        )}
      </Modal>
    </div>
  );
}
