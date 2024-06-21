import React from 'react'

const ProcessTable = ({ processes }) => {
  return (
    <div className="processTable w-full">
      <div>Process table</div>
      <div className="cells flex flex-wrap justify-center">
        {!processes.length
          ? <span className="text-xs md:text-sm">Please provide inputs</span>
          : "none"}
      </div>
    </div>
  )
}

export default ProcessTable;
