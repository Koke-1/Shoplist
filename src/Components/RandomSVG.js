import React, { useEffect } from 'react'

export default function RandomSVG({Loading,setLoading}) {
  useEffect(() => {
    const potato = document.querySelector("#Potato").style
    const pan = document.querySelector("#Pan").style
    const chicken = document.querySelector("#Chicken").style
    const bean = document.querySelector("#Bean").style

    setInterval(()=>{
      pan.stroke ="rgb(82, 2, 2)"
      potato.stroke = "rgb(82, 2, 2)"
      chicken.stroke = "rgb(82, 2, 2)"
      bean.stroke = "rgb(82, 2, 2)"
      setTimeout(() => {
        pan.stroke = "red"
        setTimeout(() => {
          chicken.stroke = "red"
          setTimeout(() => {
            bean.stroke = "red"
            setTimeout(() => {
              potato.stroke="red"
              setTimeout(()=>{
                setLoading(!Loading)
              },4600)
            }, 250);
          }, 250);
        },250);
      }, 500);
    },3000)



    
  }, [])

    return (
      <div className="SVG" >    
        <svg className="svg" stroke="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1570 948" preserveAspectRatio="xMinYMid meet" >
          <text x="200" y="-150" ><tspan className="The" >The</tspan><tspan className="Recipe" >Recipe</tspan><tspan className="Book" >Book</tspan>  </text>
          <path id="Pan"
            fill="none" strokeWidth="12"
        d="M 966.08,473.84
           C 927.54,473.49 832.54,472.64 737.00,471.77
             611.22,470.64 484.50,469.50 484.50,469.50
             484.50,469.50 491.00,698.00 504.00,697.00
             504.00,697.00 553.07,721.78 621.00,724.00
             698.23,726.53 799.43,724.55 871.00,724.00
             931.43,723.54 971.99,702.82 963.00,696.00
             963.00,696.00 985.25,576.88 984.42,508.74
             984.30,499.06 1162.48,503.82 1177.18,498.55
             1194.38,492.38 1179.00,475.50 1179.00,475.50
             1179.00,475.50 977.54,473.94 966.08,473.84 Z" />
            <path id="Chicken"
              fill="none" stroke="red" strokeWidth="12"
        d="M 537.82,270.73
           C 537.82,270.73 519.15,276.73 519.15,276.73
             519.15,276.73 528.48,291.73 528.48,291.73
             528.48,291.73 508.82,295.73 508.82,295.73
             508.82,295.73 516.07,308.98 516.07,308.98
             516.07,308.98 536.57,309.73 536.57,309.73
             536.57,309.73 551.32,319.73 551.32,319.73
             551.32,319.73 554.82,352.73 554.82,352.73
             554.82,352.73 555.15,381.73 555.15,381.73
             555.15,381.73 578.82,399.06 578.82,399.06
             578.82,399.06 614.48,413.73 614.82,414.06
             615.15,414.39 656.82,407.39 656.82,407.39
             656.82,407.39 685.15,393.73 685.15,393.73
             685.15,393.73 696.48,371.73 696.48,371.73
             696.48,371.73 680.48,338.73 680.15,338.73
             679.82,338.73 660.48,314.39 660.48,314.39
             660.48,314.39 630.67,300.67 629.67,300.33
             628.67,300.00 602.00,296.00 602.00,296.00
             602.00,296.00 580.48,297.39 580.48,297.39
             580.48,297.39 565.45,301.64 565.45,301.64
             565.45,301.64 548.69,287.48 548.69,287.35
             548.69,287.23 537.82,270.73 537.82,270.73 Z" />
             <path id="Bean"
        fill="none" stroke="red" strokeWidth="12"
        d="M 924.00,278.00
           C 916.15,269.89 901.00,269.00 901.00,269.00
             901.00,269.00 882.32,271.03 874.67,279.67
             866.82,288.53 870.00,304.00 870.00,304.00
             870.00,304.00 873.00,318.55 881.67,324.67
             889.99,330.55 904.00,328.00 904.00,328.00
             904.00,328.00 917.66,326.60 924.67,319.33
             931.14,312.63 931.00,300.00 931.00,300.00
             931.00,300.00 931.12,285.36 924.00,278.00 Z" />
             <path id="Potato"
        fill="none" stroke="red" strokeWidth="12"
        d="M 654.00,115.50
           C 654.00,115.50 618.00,160.50 618.00,160.50
             618.00,160.50 658.50,189.00 658.50,189.00
             658.50,189.00 714.00,160.50 714.00,160.50
             714.00,160.50 654.00,115.50 654.00,115.50 Z
           M 837.00,265.50" />
        </svg>
        </div>

    )
}
