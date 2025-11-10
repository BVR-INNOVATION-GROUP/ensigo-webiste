import React from "react";

const Card: React.FC<{ title: string; paragraph: string; bg?: string }> = ({
  title,
  paragraph,
  bg,
}) => {
  return (
    <div
      className={`bg-paper ${
        bg && "transform sm:-translate-y-8"
      } rounded-2xl relative flex flex-col items-start justify-center py-10 px-6 md:py-[5vw] md:px-[6vw] flex-1 ${bg}`}
    >
      {/* top left mark */}
      {!bg && (
        <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[80px] sm:w-[100px] absolute top-0 left-0 transform rotate-[45deg] origin-left" />
      )}

      <h2 className="text-lg sm:text-xl text-primary font-bold">{title}</h2>
      <p className="mt-3 text-sm sm:text-base leading-relaxed">{paragraph}</p>

      {/* bottom right mark */}
      {!bg && (
        <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[80px] sm:w-[100px] absolute bottom-0 right-0 transform rotate-[45deg] origin-right" />
      )}
    </div>
  );
};

const Vision = () => {
  const mission = {
    title: "Mission",
    paragraph:
      "To empower African communities to combat deforestation and climate change through sustainable reforestation initiatives, innovative technology, and transparent impact measurement.",
  };

  const vision = {
    title: "Our Vision",
    paragraph:
      "A thriving Africa where communities prosper in harmony with nature, where every tree planted creates lasting environmental and economic benefits, and where technology ensures transparency and accountability.",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full px-4 sm:px-0">
      <Card {...mission} />
      <Card bg="bg-pale-dark" {...vision} />
    </div>
  );
};

export default Vision;
