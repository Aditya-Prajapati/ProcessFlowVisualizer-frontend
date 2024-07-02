import React from "react";

import { useScreenSize } from "../../contexts/ScreenSizeContext";

const ProcessTable = ({ processTableData, heading }) => {
  const { sm, md, lg } = useScreenSize();
  // First row in the processTableData should consists of [{object with header names (text, smText)}] and subsequent records should have {values in the same order as headers}
  const dataHeaders = processTableData && processTableData[0];
  const dataRows = processTableData && processTableData.slice(1);

  return (
    <div className="processTable w-full">
      <div className="text-base md:text-md my-1">{heading}</div>
      {processTableData === "err" ? (
          <div className="err">Error fetching process table data. Please retry.</div>
        ) : !processTableData || processTableData.length <= 1 ? (
        <div className="text-center text-xs md:text-sm">
          Provide inputs to see process table here.
        </div>
      ) : (
        <div className="processTable w-full max-h-[500px] overflow-auto">
          <table className="text-xs md:text-sm w-full border-separate">
            <thead className="font-light md:font-bold sticky top-0">
              <tr className="text-center text-white bg-black">
                {dataHeaders.map((header, idx) => {
                  return(
                    <th key={idx} className="rounded p-1">{(sm && header.smText) || header.text}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, idx) => (
                <tr key={idx} className={`text-center ${idx % 2 ? "bg-gray-100" : "bg-white"}`}>
                  {Object.values(row).map((val, idx) => (
                    <td key={idx} className="rounded p-1 border">
                      {!Array.isArray(val) ? (
                        val 
                      ) : (
                        <div>
                          {val.map((num) => (
                            <div key={num}>{num}</div>
                          ))}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProcessTable;
