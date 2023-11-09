import Image from "next/image";
import React, { useRef, useState } from "react";
import DuarIcon from "../../assets/images/duar_gurutto.svg";

function CategoryItem({ catItem, data }) {
  const subItem = useRef()
  const {sub_category} = data;
  const { cat_name_en } = catItem;
  const catItemId = catItem.id;
  const filterSubCategory = sub_category.filter(item => catItemId === item.cat_id)
  console.log(filterSubCategory)
  
  return (
    <div className="mt-4">
      <div className="flex gap-3 h-18 px-3 items-center rounded-xl">
        <div className="h-14 w-14 flex items-center justify-center">
          <Image src={DuarIcon} width={30} height={30} alt="" />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <div>
            {cat_name_en ? (
              <p className="text-base font-[500] text-black">{cat_name_en}</p>
            ) : (
              ""
            )}
            <p className="text-gray-400 text-xs mt-1 xs:text-[11px]">
              Subcategory: {filterSubCategory?.length}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base xs:text-sm">15</p>
            <p className="text-gray-400 text-xs xs:text-[11px]">Duas</p>
          </div>
        </div>
      </div>
      <div ref={subItem} className="pl-10 pr-5 mt-4">
      <div className="flex flex-col gap-5 border-l-[2px] border-dotted border-[#1FA45B]">
        {filterSubCategory?.map(item => <>
        <div className="flex gap-4 items-start">
          <div className="w-[8px] h-[8px] bg-primary rounded-[50%] ml-[-4px] mt-[7px]"></div><p className="cursor-pointer font-semibold text-left text-sm">{item.subcat_name_en}</p>
          </div>
          </>)}
      </div>
      </div>
    </div>
  );
}

export default CategoryItem;
