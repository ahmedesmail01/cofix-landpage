"use client";

import React, { useState } from "react";

// 1) Define a type for our timeouts record
type TimeoutHandle = ReturnType<typeof setTimeout>;
type TimeoutsMap = Record<string, TimeoutHandle>;

const Building = () => {
  // 2) Initialize activeTimeouts with an empty object, typed as TimeoutsMap
  const [activeTimeouts, setActiveTimeouts] = useState<TimeoutsMap>({});

  const getRandomColor = () => {
    return Math.random() < 0.5 ? "#159861" : "#007AFF"; // Green or Blue
  };

  const getRandomBasicColor = () => {
    return Math.random() < 0.5 ? "#575959" : "#bfc1c0"; // Gray-ish tones
  };

  // 3) Type the event as a mouse event on an SVG element (e.g. rect)
  const handleHover = (
    e: React.MouseEvent<SVGRectElement> | React.MouseEvent<SVGPolygonElement>
  ) => {
    const element = e.currentTarget;
    const elementId = element.id || Math.random().toString(); // Unique ID if none

    // Clear existing timeout for this element if it exists
    if (activeTimeouts[elementId]) {
      clearTimeout(activeTimeouts[elementId]);
    }

    // Pick a random color
    const color = getRandomColor();

    // Apply fill + drop shadow
    element.style.fill = color;
    element.style.filter = `drop-shadow(0 0 8px ${color})`;

    // Schedule revert after 300ms
    const timeout = setTimeout(() => {
      element.style.fill = getRandomBasicColor();
      element.style.filter = "none";

      // Clean up from state
      setActiveTimeouts((prev) => {
        const newTimeouts = { ...prev };
        delete newTimeouts[elementId];
        return newTimeouts;
      });
    }, 300);

    // Store timeout in state
    setActiveTimeouts((prev) => ({
      ...prev,
      [elementId]: timeout,
    }));
  };

  return (
    <div style={{ width: "100%", maxWidth: 1080 }}>
      <svg
        width={"100%"}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        // style={{ enableBackground: "new 0 0 1920 1080" }}
        xmlSpace="preserve"
      >
        <style type="text/css">
          {`.st0{display:none;}
	.st1{display:inline;}
	.st2{fill:#AD5555;}
	.st3{fill:#605555;}
	.st4{fill:#BBBCBC;}
	.st5{fill:#606161;}
	.st6{fill:#BFC1C0;}`}
        </style>
        <g id="Layer_1_1_" className="st0">
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="248.5"
              className="st2"
              width="63"
              height="30"
            />
            <path d="M485,249v29h-62v-29H485 M486,248h-64v31h64V248L486,248z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="287.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,288v25h-62v-25H485 M486,287h-64v27h64V287L486,287z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="322.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,323v25h-62v-25H485 M486,322h-64v27h64V322L486,322z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="357.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,358v25h-62v-25H485 M486,357h-64v27h64V357L486,357z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="392.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,393v25h-62v-25H485 M486,392h-64v27h64V392L486,392z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="427.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,428v25h-62v-25H485 M486,427h-64v27h64V427L486,427z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="462.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,463v25h-62v-25H485 M486,462h-64v27h64V462L486,462z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="497.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,498v25h-62v-25H485 M486,497h-64v27h64V497L486,497z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="532.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,533v25h-62v-25H485 M486,532h-64v27h64V532L486,532z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="567.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,568v25h-62v-25H485 M486,567h-64v27h64V567L486,567z" />
          </g>
          <g className="st1">
            <rect
              onMouseEnter={handleHover}
              x="422.5"
              y="602.5"
              className="st2"
              width="63"
              height="26"
            />
            <path d="M485,603v25h-62v-25H485 M486,602h-64v27h64V602L486,602z" />
          </g>

          {/* <image
            style="display:inline;overflow:visible;enable-background:new    ;"
            width="1272"
            height="513"
            xlink:href="C:\Users\Ahmed-emali\Pictures\Screenshots\Screenshot 2025-02-10 142405.png"
            transform="matrix(1.513 0 0 1.7183 -2.266 139.75)"
          ></image> */}
        </g>
        <g id="Layer_2_1_">
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="148.4,223.5 148.4,230.4 287.6,193.4 287.6,186.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="286.3,201.8 286.3,208.4 115.2,255.1 115.2,248 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="286.3,215.6 286.3,222.5 120.9,265.9 120.9,260.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="269.7,240.7 269.7,256.9 284.5,253.9 284.5,238.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="246.2,246.1 246.2,262.3 261,259.2 261,243.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="222,252.5 222,268.7 236.8,265.6 236.8,250.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="199.2,258.8 199.2,275.1 214,272 214,256.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="176.3,264.2 176.3,280.4 191.1,277.4 191.1,262 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="153.8,269.8 153.8,286 168.6,283 168.6,267.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st5"
            points="131.6,275.2 131.6,291.4 146.4,288.3 146.4,273 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="270.5,272.4 270.5,288.6 285.3,285.5 285.3,270.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="247,277.7 247,293.9 261.8,290.9 261.8,275.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="222.7,284.1 222.7,300.3 237.5,297.3 237.5,281.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="200,290.5 200,306.7 214.8,303.6 214.8,288.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="177,295.9 177,312.1 191.8,309 191.8,293.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="154.6,301.5 154.6,317.7 169.4,314.6 169.4,299.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="132.3,306.8 132.3,323.1 147.1,320 147.1,304.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="269.3,302.5 269.3,318.7 284.1,315.6 284.1,300.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="245.8,307.9 245.8,324.1 260.6,321 260.6,305.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="221.6,314.2 221.6,330.5 236.4,327.4 236.4,312.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="198.9,320.6 198.9,336.8 213.7,333.8 213.7,318.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="175.9,326 175.9,342.2 190.7,339.1 190.7,323.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="153.4,331.6 153.4,347.8 168.2,344.8 168.2,329.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="131.2,337 131.2,353.2 146,350.1 146,334.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="270.2,335.7 270,351.9 284.8,349.1 285.1,333.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="246.7,340.7 246.4,356.9 261.2,354.1 261.5,338.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="222.3,346.7 222,362.9 236.9,360 237.1,344.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="199.5,352.6 199.2,368.9 214.1,366 214.3,350.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="176.4,357.6 176.1,373.8 191,371 191.2,355.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="153.8,362.9 153.6,379.1 168.4,376.3 168.7,360.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="131.5,367.8 131.3,384.1 146.1,381.2 146.4,365.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="269.2,368.5 268.9,384.7 283.8,381.9 284.1,366.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="245.6,373.5 245.4,389.7 260.2,386.9 260.5,371.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="221.3,379.4 221,395.6 235.9,392.8 236.1,377.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="198.4,385.4 198.2,401.6 213,398.8 213.3,383.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="175.4,390.4 175.1,406.6 190,403.8 190.2,388.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="152.8,395.6 152.5,411.8 167.4,409 167.7,393.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="130.5,400.6 130.2,416.8 145.1,414 145.4,398.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="130.2,428.5 130.2,443.1 143.8,440.2 143.8,427.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="153.8,425.3 153.6,437.9 166.6,436.4 166.6,424.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="176.3,421.4 176.1,433.3 189,433.3 189,419.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="198.2,416.8 198.2,430 213.7,428.2 213.7,415.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="221.6,411.8 221.6,424.3 237.5,422.8 237.1,409.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="245.4,407.8 245.4,419.8 260.5,419.8 260.5,406.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="270.5,402.8 270.5,415.5 285.3,414.5 285.3,401.6 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="131.2"
            y="459.3"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="153.7"
            y="455"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="177.1"
            y="450.7"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="199.7"
            y="446.8"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="221.6"
            y="443.4"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="246.6"
            y="438.6"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="271.7"
            y="434.8"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="131.7"
            y="489.9"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="154.2"
            y="485.7"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="177.7"
            y="481.3"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="200.2"
            y="477.4"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="222.1"
            y="474.1"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="247.2"
            y="469.2"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="272.2"
            y="465.4"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="131"
            y="521.1"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="153.4"
            y="516.8"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="176.9"
            y="512.5"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="199.4"
            y="508.6"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="221.4"
            y="505.2"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="246.4"
            y="500.4"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="271.4"
            y="496.6"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="132"
            y="552.2"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="154.5"
            y="548"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="178"
            y="543.6"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="200.5"
            y="539.7"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="222.5"
            y="536.4"
            className="st3"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="247.5"
            y="531.5"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="272.5"
            y="527.7"
            className="st4"
            width="14.2"
            height="12.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="131.7,579.4 143.8,579.4 143.8,592.2 132,592.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="154.2,577.4 166.3,577.4 166.3,590.1 154.5,590.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="177.6,574.8 189.7,574.8 189.7,587.6 177.9,587.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="200.3,572 212.4,572 212.4,584.8 200.7,584.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="224.2,569.7 236.3,569.7 236.3,582.5 224.5,582.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="247.8,566.4 259.9,566.4 259.9,579.1 248.1,579.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="271,563.6 283.2,563.6 283.2,576.3 271.4,576.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="132.5,611.3 144.6,611.3 144.6,624.1 132.8,624.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="154.9,609.3 167.1,609.3 167.1,622 155.3,622 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="178.4,606.7 190.5,606.7 190.5,619.5 178.7,619.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="201.1,603.9 213.2,603.9 213.2,616.7 201.4,616.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="224.9,601.6 237.1,601.6 237.1,614.4 225.3,614.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="248.6,598.3 260.7,598.3 260.7,611.1 248.9,611.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="271.8,595.5 283.9,595.5 283.9,608.2 272.1,608.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="133,641 145.1,641 145.1,653.7 133.3,653.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="155.4,638.9 167.6,638.9 167.6,651.7 155.8,651.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="178.9,636.4 191,636.4 191,649.1 179.2,649.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="201.6,633.6 213.7,633.6 213.7,646.3 201.9,646.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="225.5,631.3 237.6,631.3 237.6,644 225.8,644 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="249.1,627.9 261.2,627.9 261.2,640.7 249.4,640.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="272.3,625.1 284.4,625.1 284.4,637.9 272.7,637.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="131.7,671.3 145.1,671.3 145.1,683.8 132,683.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="153.7,669.8 167.1,669.8 167.1,682.3 154.1,682.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="177.2,668.8 190.6,668.8 190.6,681.3 177.6,681.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="199.7,666.5 213.1,666.5 213.1,679 200,679 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="222.4,664.4 235.8,664.4 235.8,676.9 222.7,676.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="246.9,662.6 260.3,662.6 260.3,675.1 247.2,675.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="271.4,660.8 284.8,660.8 284.8,673.3 271.7,673.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="132,701.9 145.4,701.9 145.4,714.5 132.3,714.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="154,700.4 167.4,700.4 167.4,712.9 154.3,712.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="177.5,699.4 190.9,699.4 190.9,711.9 177.8,711.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="199.9,697.1 213.3,697.1 213.3,709.6 200.3,709.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="222.6,695 236,695 236,707.5 223,707.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="247.1,693.2 260.5,693.2 260.5,705.8 247.5,705.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="271.6,691.5 285,691.5 285,704 272,704 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="132,733.4 145.4,733.4 145.4,745.9 132.3,745.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="154,731.8 167.4,731.8 167.4,744.3 154.3,744.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="177.5,730.8 190.9,730.8 190.9,743.3 177.8,743.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="199.9,728.5 213.3,728.5 213.3,741 200.3,741 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="222.6,726.4 236,726.4 236,738.9 223,738.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="247.1,724.6 260.5,724.6 260.5,737.2 247.5,737.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="271.6,722.9 285,722.9 285,735.4 272,735.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="130.7,763.5 144.1,763.5 144.1,776 131,776 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="152.7,761.9 166.1,761.9 166.1,774.5 153,774.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="176.2,760.9 189.6,760.9 189.6,773.4 176.5,773.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="198.7,758.6 212.1,758.6 212.1,771.1 199,771.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="221.3,756.6 234.7,756.6 234.7,769.1 221.7,769.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="245.8,754.8 259.2,754.8 259.2,767.3 246.2,767.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="270.3,753 283.7,753 283.7,765.5 270.7,765.5 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="152.7"
            y="791.6"
            className="st3"
            width="13.4"
            height="13"
          />
          <rect
            onMouseEnter={handleHover}
            x="176.7"
            y="791.8"
            className="st4"
            width="13.4"
            height="13"
          />
          <rect
            onMouseEnter={handleHover}
            x="199.9"
            y="791.3"
            className="st4"
            width="13.4"
            height="13"
          />
          <rect
            onMouseEnter={handleHover}
            x="223.1"
            y="791.3"
            className="st3"
            width="13.4"
            height="13"
          />
          <rect
            onMouseEnter={handleHover}
            x="245.6"
            y="790"
            className="st3"
            width="13.4"
            height="13"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="130.7,821.7 130.7,832.7 145.4,832.7 145.1,821.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="153.9,823.1 153.9,834.1 168.6,834.1 168.3,823.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="178.2,823.4 178.2,834.3 192.9,834.3 192.6,823.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="198.6,822.3 198.6,833.3 213.3,833.3 213,822.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="222.5,822.1 222.5,833.1 237.2,833.1 237,822.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="271.2,821.1 271.2,832 285.9,832 285.7,821.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="552.5,414.7 552.5,426.7 563.8,424.4 563.8,413.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536.6,418.7 536.6,430.7 547.9,428.4 547.9,417.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="516.3,423.4 516.3,435.4 527.5,433.1 527.5,421.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="500.9,428.1 500.9,440.1 512.2,437.8 512.2,426.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="483.5,432.1 483.5,444.1 492.8,441.8 492.8,430.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="464.5,436.2 464.5,448.2 475.7,446 475.7,434.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="447.6,440.2 447.6,452.2 458.9,449.9 458.9,438.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="555,438.1 555,450.1 566.3,447.9 566.3,436.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="535.3,442.1 535.3,454.1 546.5,451.8 546.5,440.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="518.8,446.8 518.8,458.8 530,456.5 530,445.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="499.6,451.5 499.6,463.5 510.9,461.3 510.9,449.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="482.1,455.5 482.1,467.5 493.4,465.2 493.4,453.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="467,459.7 465.1,471.6 476.3,469.4 478.2,458.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="448.2,463.6 448.2,475.6 459.5,473.3 459.5,462 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="552.3,460.4 552.3,472.4 563.5,470.1 563.5,458.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536.3,464.4 536.3,476.4 547.6,474.1 547.6,462.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="516,469.1 517.9,481.1 529.1,478.8 527.2,467.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="500.6,473.8 500.6,485.8 511.9,483.5 511.9,472.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="481.3,477.8 481.3,489.8 492.5,487.5 492.5,476.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="464.2,481.9 466.1,493.9 477.4,491.7 475.5,480.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="447.3,485.9 447.3,497.9 458.6,495.6 458.6,484.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="554.8,485 554.6,497 564,494.9 564.2,483.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="535,488.6 534.8,500.6 546.1,498.6 546.3,487.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="518.4,493.1 518.2,505.1 529.5,503 529.7,491.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="499.2,497.5 499,509.5 510.3,507.4 510.5,496.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="481.7,501.2 481.5,513.2 494.7,511.1 494.9,499.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="464.5,505.1 464.3,517 475.6,515 475.8,503.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="449.5,508.7 449.3,520.7 460.6,518.6 460.8,507.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="554.1,509.2 553.9,521.2 565.2,519.1 565.3,507.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536.2,512.9 536,524.9 547.2,522.8 547.4,511.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="515.8,517.3 515.6,529.3 526.8,527.2 527,515.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="500.3,521.7 500.1,533.7 509.5,531.6 509.7,520.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="480.9,525.4 480.7,537.4 492,535.3 492.2,524 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="465.7,529.3 465.5,541.3 476.7,539.2 476.9,527.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="446.8,533 446.6,545 457.9,542.9 458.1,531.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="446.6,553.6 446.6,564.4 456.9,562.3 456.9,552.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="466.4,551.2 466.2,560.6 476.1,559.4 476.1,550.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="483.5,548.3 483.4,557.1 493.2,557.1 493.2,547.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="498.2,545 498.2,554.7 511.9,553.4 511.9,544 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="517.9,541.2 517.9,550.5 530,549.3 529.7,539.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536,538.3 536,547.2 547.4,547.2 547.4,537.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="553.1,534.6 553.1,544 564.4,543.2 564.4,533.7 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="449.2"
            y="576.3"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="464.4"
            y="573.2"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="482.2"
            y="570"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="501.2"
            y="567.1"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="516"
            y="564.6"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="535"
            y="561.1"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="555.9"
            y="558.2"
            className="st4"
            width="8.9"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="447.7"
            y="599"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="466.7,595.9 477.5,595.9 475.6,605.4 464.8,605.4 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="482.6"
            y="592.7"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="501.6"
            y="589.8"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="516.4"
            y="587.3"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="535.4"
            y="583.7"
            className="st4"
            width="12.7"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="554.4"
            y="580.9"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="447.2"
            y="622"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="466.1"
            y="618.9"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="482.1,615.7 492.9,615.7 494.8,625.2 484,625.2 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="501.1"
            y="612.8"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="517.8"
            y="610.3"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="534.9"
            y="606.8"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="553.9"
            y="603.9"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="448"
            y="645.1"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="465.1"
            y="642"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="484.8"
            y="638.7"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="501.9"
            y="635.8"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="518.6"
            y="633.4"
            className="st4"
            width="8.9"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="535.7"
            y="629.8"
            className="st3"
            width="10.8"
            height="9.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="556.6"
            y="627"
            className="st4"
            width="10.8"
            height="9.5"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="449.6,665.2 458.8,665.2 458.8,674.6 449.9,674.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="466.7,663.7 475.9,663.7 475.9,673.1 467,673.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="482.6,661.8 491.8,661.8 491.8,671.2 482.8,671.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="499.8,659.7 509.1,659.7 509.1,669.2 500.1,669.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="518,658 527.2,658 527.2,667.5 518.2,667.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="537.8,655.6 547,655.6 547,665 538.1,665 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="555.5,653.5 564.7,653.5 564.7,662.9 555.7,662.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="448.3,688.8 457.5,688.8 457.5,698.2 448.6,698.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="465.4,687.3 475.7,687.3 475.7,696.7 465.6,696.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="483.2,685.4 492.4,685.4 492.4,694.8 483.4,694.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="501.5,683.3 510.7,683.3 510.7,692.8 501.8,692.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="518.5,681.6 528.9,681.6 528.9,691.1 518.8,691.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="536.5,679.2 545.7,679.2 545.7,688.6 536.8,688.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="554.1,677.1 563.4,677.1 564.5,686.5 555.5,686.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="448.7,710.7 457.9,710.7 457.9,720.2 449,720.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="466.9,709.2 476.1,709.2 476.1,718.7 467.1,718.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="483.6,707.3 493.9,707.3 493.9,716.8 483.8,716.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="501.9,705.2 511.1,705.2 511.1,714.7 502.2,714.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="518.9,703.5 528.1,703.5 528.1,713 519.2,713 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="538,701.1 547.2,701.1 547.2,710.5 538.2,710.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="554.5,699 563.7,699 563.7,708.5 554.8,708.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="447.7,733.2 457.9,733.2 457.9,742.4 448,742.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="465.6,732 475.7,732 475.7,741.3 465.8,741.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="482.3,731.3 492.5,731.3 492.5,740.5 482.6,740.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="500.5,729.6 510.6,729.6 510.6,738.8 500.7,738.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="516.6,728 526.8,728 526.8,737.3 516.8,737.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536.3,726.7 546.5,726.7 546.5,736 536.6,736 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="553.8,725.4 564,725.4 564,734.7 554.1,734.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="447.9,755.8 458.1,755.8 458.1,765.1 448.2,765.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="465.7,754.7 475.9,754.7 475.9,763.9 466,763.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="482.5,753.9 492.7,753.9 492.7,763.2 482.7,763.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="499.6,752.2 510.8,752.2 510.8,761.5 499.8,761.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="516.8,750.7 527,750.7 527,760 517,760 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="536.5,749.4 546.7,749.4 546.7,758.6 536.7,758.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="555.1,748.1 565.3,748.1 565.3,757.3 555.4,757.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="449,779 459.2,779 459.2,788.3 449.3,788.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="465.7,777.9 474.8,777.9 474.8,787.2 466,787.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="482.5,777.2 492.7,777.2 492.7,786.4 482.7,786.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="500.7,775.5 510.8,775.5 510.8,784.7 500.9,784.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="516.8,773.9 527,773.9 527,783.2 517,783.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="535.4,772.6 546.7,772.6 546.7,781.9 535.6,781.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="554,771.3 564.2,771.3 564.2,780.5 554.3,780.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="446.9,801.3 457.1,801.3 457.1,810.6 447.2,810.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="464.8,800.2 475,800.2 475,809.4 465,809.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="482.6,799.4 492.8,799.4 492.8,808.7 482.9,808.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="499.7,797.7 509.9,797.7 509.9,807 499.9,807 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="515.8,796.2 526,796.2 526,805.5 516.1,805.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="535.5,794.9 545.7,794.9 545.7,804.1 535.8,804.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="553,793.6 563.2,793.6 563.2,802.8 553.3,802.8 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="463.7"
            y="822.1"
            className="st3"
            width="10.2"
            height="9.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="483"
            y="822.3"
            className="st4"
            width="10.2"
            height="9.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="499.6"
            y="821.9"
            className="st4"
            width="11.3"
            height="9.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="518.3"
            y="821.9"
            className="st4"
            width="10.2"
            height="9.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="534.2"
            y="821"
            className="st3"
            width="10.2"
            height="9.6"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="448,844.4 448,852.5 459.2,852.5 459,844.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="464.6,845.4 464.6,853.5 475.7,853.5 475.6,845.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="483,845.6 483,853.7 494.2,853.7 494,845.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="499.6,844.8 499.6,853 510.8,853 510.6,844.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="517.8,844.7 517.8,852.8 529,852.8 528.8,844.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="554.8,843.9 554.8,852 566,852 565.8,843.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="301.5,186.5 301.5,193.5 411.8,233.4 411.8,225.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="301.5,201.8 301.5,208.4 437.4,256.9 437.4,250.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="301.5,215.6 301.5,222.8 432.9,271.2 432.9,263.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="310,238.5 310,251.7 320.6,255.1 320.6,242.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327.3,244.5 327.3,257.7 337.8,261.1 337.8,248.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="343.8,250.5 343.8,263.7 354.4,267.1 354.4,254.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="361.2,257.5 361.2,270.6 371.7,274.1 371.7,261.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.5,263.2 377.5,276.4 388.1,279.8 388.1,267.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.7,269.2 393.7,282.4 404.2,285.8 404.2,273.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="409.2,274.9 409.2,288.1 419.7,291.5 419.7,279.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="310.3,269.4 310.3,282.6 320.9,286 320.9,273.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327.5,275.4 327.5,288.6 338.1,292 338.1,279.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="344.1,281.4 344.1,294.6 354.6,298 354.6,285.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="361.4,288.4 361.4,301.5 372,304.9 372,292.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.8,294.1 377.8,307.2 388.3,310.6 388.3,298.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.9,300.1 393.9,313.3 404.5,316.7 404.5,304.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="409.4,305.8 409.4,319 420,322.4 420,309.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="309.8,301.1 309.8,314.3 320.3,317.7 320.3,305.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327,307.1 327,320.3 337.6,323.7 337.6,311.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="343.6,313 343.6,326.2 354.1,329.6 354.1,317.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="360.9,320 360.9,333.2 371.5,336.6 371.5,324.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.3,325.7 377.3,338.9 387.8,342.3 387.8,329.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.4,331.8 393.4,344.9 404,348.4 404,335.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="408.9,337.5 408.9,350.6 419.5,354.1 419.5,341.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="310,331.8 310,344.9 320.6,348.3 320.6,335.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327.3,337.8 327.3,350.9 337.8,354.3 337.8,341.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="343.8,343.7 343.8,356.9 354.3,360.3 354.3,347.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="361.1,350.7 361.1,363.9 371.7,367.3 371.7,354.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.5,356.4 377.5,369.6 388,373 388,360.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="393.7,362.4 393.7,375.6 404.2,379 404.2,366.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="409.1,368.1 409.1,381.3 419.7,384.7 419.7,372.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="310,362.8 310,376 320.6,379.4 320.6,366.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="327.2,368.8 327.2,382 337.8,385.4 337.8,372.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="343.8,374.7 343.8,387.9 354.3,391.3 354.3,378.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="361.1,381.7 361.1,394.9 371.7,398.3 371.7,385.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.5,387.4 377.5,400.6 388,404 388,391.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.6,393.4 393.6,406.6 404.2,410 404.2,397.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="409.1,399.1 409.1,412.3 419.7,415.7 419.7,403.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="310,393.7 310,406.9 320.5,410.3 320.5,397.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="327.2,399.7 327.2,412.9 337.8,416.3 337.8,403.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="343.7,405.6 343.7,418.8 354.3,422.2 354.3,409.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="361.1,412.6 361.1,425.8 371.7,429.2 371.7,416.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.4,418.3 377.4,431.5 388,434.9 388,422.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.6,424.3 393.6,437.5 404.2,440.9 404.2,428.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="409.1,430.1 409.1,443.2 419.7,446.6 419.7,434.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="309.8,431.9 309.8,447.3 320.4,449.3 320.4,433.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327.5,436.2 327.5,451.6 338.1,453.5 338.1,438 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="344.8,440.5 344.8,455.9 355.4,457.9 355.4,442.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="360.8,444.9 360.8,460.3 371.4,462.3 371.4,446.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="376.8,448.8 376.8,464.2 387.4,466.1 387.4,450.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="392.8,453.3 392.8,468.7 403.4,470.6 403.4,455.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="408.4,457.6 408.4,473 419,474.9 419,459.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="309.8,462.8 309.8,478.2 320.4,480.1 320.4,464.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="327.5,467 327.5,482.4 338.1,484.4 338.1,468.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="344.8,471.4 344.8,486.8 355.4,488.8 355.4,473.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="360.8,475.8 360.8,491.2 371.4,493.1 371.4,477.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="376.8,479.6 376.8,495.1 387.4,497 387.4,481.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="392.8,484.1 392.8,499.5 403.4,501.5 403.4,485.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="408.4,488.4 408.4,503.8 419,505.8 419,490.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="310.9,492.7 310.9,508.1 321.4,510 321.4,494.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="328.6,496.9 328.6,512.3 339.1,514.3 339.1,498.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="345.8,501.3 345.8,516.7 356.4,518.6 356.4,503.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="361.8,505.7 361.8,521.1 372.4,523 372.4,507.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.8,509.5 377.8,524.9 388.4,526.9 388.4,511.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="393.8,514 393.8,529.4 404.4,531.4 404.4,515.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="409.4,518.3 409.4,533.7 420,535.7 420,520.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="309.5,525 309.5,540.4 320.1,542.4 320.1,526.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="327.2,529.3 327.2,544.7 337.8,546.6 337.8,531.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="344.4,533.6 344.4,549 355,551 355,535.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="360.4,538 360.4,553.4 371,555.4 371,539.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="376.4,541.9 376.4,557.3 387,559.2 387,543.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="392.4,546.4 392.4,561.8 403,563.7 403,548.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="408.1,550.7 408.1,566.1 418.7,568 418.7,552.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="309.5,554.6 309.5,570.1 320.1,572 320.1,556.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="327.2,558.9 327.2,574.3 337.8,576.3 337.8,560.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="344.4,563.3 344.4,578.7 355,580.6 355,565.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="360.4,567.6 360.4,583.1 371,585 371,569.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="376.4,571.5 376.4,586.9 387,588.9 387,573.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="392.4,576 392.4,591.4 403,593.4 403,577.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="408.1,580.3 408.1,595.7 418.7,597.7 418.7,582.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="310,589.1 310,604.5 320.6,606.5 320.6,590.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="327,595.3 327,610.7 337.6,612.6 337.6,597.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="344.5,596.4 344.5,611.8 355.1,613.8 355.1,598.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="360.8,601.2 360.8,616.6 371.4,618.6 371.4,603 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="377.3,604.6 377.3,620 387.9,622 387.9,606.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="392.4,606.5 392.4,621.9 403,623.9 403,608.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="408.1,610.8 408.1,626.2 418.7,628.2 418.7,612.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="306.7,624.6 306.7,639.3 318.8,639.3 318.8,625.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="324.6,628.4 324.6,643.1 336.8,643.1 336.8,629.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="342.1,630.9 342.1,645.6 354.3,645.6 354.3,632.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="360.9,633.7 360.9,648.3 373,648.3 373,634.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="377.3,636.1 377.3,650.7 389.5,650.7 389.5,637.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="393.7,638.8 393.7,653.5 405.8,653.5 405.8,640 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="409.9,642.4 409.9,657.1 422,657.1 422,643.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="309.5,656.8 309.5,672.7 320.8,673.3 320.8,658.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="325.5,659.1 325.5,675 336.8,675.6 336.8,660.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="342.5,660.2 342.5,676.2 353.8,676.8 353.8,661.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="359.5,662.4 359.5,678.3 370.8,679 370.8,663.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="376.7,665 376.7,680.9 388,681.6 388,666.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="392.5,666.2 392.5,682.1 403.8,682.7 403.8,667.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="408.5,667.8 408.5,683.7 419.8,684.3 419.8,669.2 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="309.5"
            y="691.5"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="326.5"
            y="692.6"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="343.5"
            y="694.2"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="360"
            y="694.8"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="376"
            y="696.4"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="394"
            y="697.6"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="409"
            y="698.5"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="308.8"
            y="722.2"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="325.8"
            y="723.4"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="342.8"
            y="724.9"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="359.3"
            y="725.5"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="375.3"
            y="727.1"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="393.3"
            y="728.3"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="408.3"
            y="729.2"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="309.5"
            y="754.9"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="326.5"
            y="756.1"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="343.5"
            y="757.6"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="360"
            y="758.2"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="376"
            y="759.8"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="394"
            y="761"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="409"
            y="761.9"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="308.8"
            y="785.6"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="325.7"
            y="786.8"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="342.8"
            y="788.3"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="359.3"
            y="788.9"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="375.3"
            y="790.5"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="393.3"
            y="791.7"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="408.3"
            y="792.6"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="307.2"
            y="816.5"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="324.2"
            y="817.6"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="341.2"
            y="819.2"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="357.8"
            y="819.8"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="373.7"
            y="821.4"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="391.8"
            y="822.6"
            className="st3"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="406.8"
            y="823.5"
            className="st4"
            width="11.3"
            height="14.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="327"
            y="851.3"
            className="st4"
            width="9.3"
            height="11"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1273,479.6 1273,484.4 1371,458.4 1371,453.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1370.1,464.3 1370.1,469 1249.7,501.9 1249.7,496.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1370.1,474 1370.1,478.9 1253.6,509.4 1253.6,505.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1358.5,491.7 1358.5,503.1 1368.9,501 1368.9,490.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1341.9,495.5 1341.9,506.9 1352.3,504.8 1352.3,494 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1324.8,500 1324.8,511.4 1335.3,509.2 1335.3,498.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1308.8,504.5 1308.8,515.9 1319.3,513.7 1319.3,503 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1292.6,508.3 1292.6,519.7 1303.1,517.5 1303.1,506.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1276.8,512.2 1276.8,523.6 1287.3,521.5 1287.3,510.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1261.2,516 1261.2,527.4 1271.6,525.3 1271.6,514.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1359,514 1359,525.4 1369.4,523.3 1369.4,512.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1342.5,517.8 1342.5,529.2 1352.9,527 1352.9,516.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1325.4,522.3 1325.4,533.7 1335.8,531.5 1335.8,520.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1309.4,526.8 1309.4,538.2 1319.8,536 1319.8,525.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1293.2,530.6 1293.2,542 1303.6,539.8 1303.6,529 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1277.4,534.5 1277.4,545.9 1287.8,543.8 1287.8,533 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1261.7,538.3 1261.7,549.7 1272.1,547.5 1272.1,536.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1358.2,535.2 1358.2,546.6 1368.6,544.5 1368.6,533.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1341.6,539 1341.6,550.4 1352.1,548.3 1352.1,537.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1324.6,543.5 1324.6,554.9 1335,552.8 1335,542 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1308.6,548 1308.6,559.4 1319,557.3 1319,546.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1292.4,551.8 1292.4,563.2 1302.8,561 1302.8,550.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1276.6,555.7 1276.6,567.1 1287,565 1287,554.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1260.9,559.5 1260.9,570.9 1271.3,568.8 1271.3,558 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1358.8,558.6 1358.6,570 1369.1,568.1 1369.3,557.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1342.2,562.1 1342,573.5 1352.5,571.6 1352.7,560.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1325.1,566.3 1324.9,577.7 1335.3,575.8 1335.5,565 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1309,570.5 1308.8,582 1319.3,580 1319.4,569.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1292.7,574.1 1292.6,585.5 1303,583.5 1303.2,572.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1276.9,577.7 1276.7,589.2 1287.1,587.2 1287.3,576.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1261.2,581.3 1261,592.7 1271.4,590.7 1271.6,579.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1358.1,581.7 1357.9,593.1 1368.4,591.1 1368.6,580.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1341.5,585.2 1341.3,596.6 1351.8,594.6 1352,583.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1324.4,589.4 1324.2,600.8 1334.6,598.8 1334.8,588.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1308.3,593.6 1308.1,605 1318.5,603.1 1318.7,592.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1292,597.1 1291.8,608.6 1302.3,606.6 1302.5,595.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1276.1,600.8 1275.9,612.2 1286.4,610.3 1286.6,599.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1260.4,604.3 1260.2,615.8 1270.7,613.8 1270.9,603 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1260.2,624 1260.2,634.2 1269.8,632.2 1269.8,623.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1276.8,621.7 1276.7,630.6 1285.8,629.5 1285.8,621 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1292.6,618.9 1292.6,627.3 1301.6,627.3 1301.6,617.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1308.1,615.8 1308.1,625 1319,623.8 1319,614.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1324.6,612.2 1324.6,621 1335.8,619.9 1335.5,610.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1341.3,609.4 1341.3,617.9 1352,617.9 1352,608.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1359,605.9 1359,614.8 1369.4,614.1 1369.4,605 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1260.9"
            y="645.6"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1276.7"
            y="642.7"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1293.3"
            y="639.6"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1309.1"
            y="636.8"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1324.6"
            y="634.5"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1342.2"
            y="631.1"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1359.8"
            y="628.4"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1261.3"
            y="667.2"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1277.1"
            y="664.2"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1293.6"
            y="661.2"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1309.5"
            y="658.4"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1325"
            y="656.1"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1342.6"
            y="652.7"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1360.2"
            y="650"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1260.7"
            y="689.2"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1276.6"
            y="686.2"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1293.1"
            y="683.1"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1309"
            y="680.3"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1324.4"
            y="678"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1342.1"
            y="674.6"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1359.7"
            y="671.9"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1261.5"
            y="711.1"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1277.3"
            y="708.1"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1293.9"
            y="705.1"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1309.7"
            y="702.3"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1325.2"
            y="699.9"
            className="st3"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1342.8"
            y="696.5"
            className="st6"
            width="10"
            height="9.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1360.4"
            y="693.8"
            className="st3"
            width="10"
            height="9.1"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1261.3,730.2 1269.8,730.2 1269.8,739.2 1261.5,739.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1277.1,728.8 1285.6,728.8 1285.6,737.8 1277.3,737.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1293.6,727 1302.1,727 1302.1,736 1293.8,736 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1309.6,725 1318.1,725 1318.1,734 1309.8,734 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1326.4,723.4 1334.9,723.4 1334.9,732.4 1326.6,732.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1343,721.1 1351.6,721.1 1351.6,730.1 1343.3,730.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1359.4,719.1 1367.9,719.1 1367.9,728.1 1359.6,728.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1261.8,752.7 1270.3,752.7 1270.3,761.7 1262.1,761.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1277.6,751.3 1286.2,751.3 1286.2,760.3 1277.9,760.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1294.1,749.5 1302.7,749.5 1302.7,758.5 1294.4,758.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1310.1,747.5 1318.7,747.5 1318.7,756.5 1310.4,756.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1326.9,745.9 1335.5,745.9 1335.5,754.9 1327.2,754.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1343.6,743.5 1352.1,743.5 1352.1,752.5 1343.8,752.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1359.9,741.6 1368.5,741.6 1368.5,750.6 1360.2,750.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1262.2,773.6 1270.7,773.6 1270.7,782.6 1262.4,782.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1278,772.2 1286.5,772.2 1286.5,781.2 1278.2,781.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1294.5,770.4 1303,770.4 1303,779.4 1294.7,779.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1310.5,768.4 1319,768.4 1319,777.4 1310.7,777.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1327.3,766.8 1335.8,766.8 1335.8,775.8 1327.5,775.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1343.9,764.4 1352.5,764.4 1352.5,773.4 1344.2,773.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1360.3,762.5 1368.8,762.5 1368.8,771.4 1360.5,771.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1261.3,795 1270.7,795 1270.7,803.8 1261.5,803.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1276.8,793.9 1286.2,793.9 1286.2,802.7 1277,802.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1293.3,793.2 1302.8,793.2 1302.8,802 1293.6,802 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1309.1,791.6 1318.6,791.6 1318.6,800.4 1309.4,800.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1325.1,790.1 1334.6,790.1 1334.6,798.9 1325.4,798.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1342.4,788.8 1351.8,788.8 1351.8,797.7 1342.6,797.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1359.6,787.6 1369.1,787.6 1369.1,796.4 1359.9,796.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1261.4,816.5 1270.9,816.5 1270.9,825.4 1261.7,825.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1277,815.5 1286.4,815.5 1286.4,824.3 1277.2,824.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1293.5,814.8 1302.9,814.8 1302.9,823.6 1293.7,823.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1309.3,813.1 1318.8,813.1 1318.8,821.9 1309.6,821.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1325.3,811.7 1334.7,811.7 1334.7,820.5 1325.5,820.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1342.5,810.4 1352,810.4 1352,819.2 1342.8,819.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1359.8,809.2 1369.2,809.2 1369.2,818 1360.1,818 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1261.4,838.7 1270.9,838.7 1270.9,847.5 1261.7,847.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1277,837.6 1286.4,837.6 1286.4,846.4 1277.2,846.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1293.5,836.9 1302.9,836.9 1302.9,845.7 1293.7,845.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1309.3,835.2 1318.8,835.2 1318.8,844.1 1309.6,844.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1325.3,833.8 1334.7,833.8 1334.7,842.6 1325.5,842.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1342.5,832.5 1352,832.5 1352,841.3 1342.8,841.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1359.8,831.3 1369.2,831.3 1369.2,840.1 1360.1,840.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1260.5,859.9 1270,859.9 1270,868.7 1260.8,868.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1276.1,858.8 1285.5,858.8 1285.5,867.6 1276.3,867.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1292.6,858.1 1302,858.1 1302,866.9 1292.8,866.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1308.4,856.5 1317.9,856.5 1317.9,865.3 1308.7,865.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1324.4,855 1333.8,855 1333.8,863.8 1324.6,863.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1341.6,853.8 1351.1,853.8 1351.1,862.6 1341.9,862.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1358.9,852.5 1368.3,852.5 1368.3,861.3 1359.2,861.3 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1276.1"
            y="879.7"
            className="st3"
            width="9.4"
            height="9.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1293"
            y="879.8"
            className="st6"
            width="9.4"
            height="9.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1309.3"
            y="879.5"
            className="st3"
            width="9.4"
            height="9.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1325.6"
            y="879.5"
            className="st6"
            width="9.4"
            height="9.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1341.5"
            y="878.6"
            className="st3"
            width="9.4"
            height="9.2"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1260.5,900.9 1260.5,908.6 1270.9,908.6 1270.7,900.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1276.9,901.9 1276.9,909.6 1287.3,909.6 1287.1,901.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1294,902.1 1294,909.8 1304.3,909.8 1304.2,902.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1308.4,901.3 1308.4,909.1 1318.7,909.1 1318.5,901.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1325.2,901.2 1325.2,908.9 1335.6,908.9 1335.4,901.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1359.5,900.4 1359.5,908.2 1369.9,908.2 1369.7,900.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1380.9,453.5 1380.9,458.5 1458.6,486.5 1458.6,481.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1380.9,464.3 1380.9,469 1476.5,503.1 1476.5,498.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1380.9,474 1380.9,479.1 1473.4,513.2 1473.4,507.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1387.7,490.2 1387.7,499.5 1395.1,501.9 1395.1,493.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1399,494.4 1399,503.7 1406.4,506.1 1406.4,497.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.4,498.6 1411.4,507.9 1418.9,510.3 1418.9,501.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.9,503.5 1422.9,512.8 1430.3,515.2 1430.3,506.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.4,507.5 1434.4,516.8 1442.6,519.2 1442.6,510.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.8,511.8 1445.8,521.1 1453.2,523.5 1453.2,514.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.7,515.8 1456.7,525.1 1464.1,527.5 1464.1,518.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1387,511.9 1387,521.2 1394.5,523.6 1394.5,514.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1399.2,516.2 1399.2,525.5 1406.6,527.9 1406.6,519.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.6,520.4 1411.6,529.6 1419.1,532 1419.1,523.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1423.1,525.3 1423.1,534.6 1430.5,537 1430.5,528.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.6,529.3 1435.4,538.6 1442.8,541 1442,532.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1446,533.5 1446,542.8 1453.4,545.2 1453.4,536.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1457.7,537.6 1457.7,546.8 1465.1,549.2 1465.1,540.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.7,534.2 1386.7,543.5 1394.1,545.9 1394.1,537.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1399.6,538.5 1399.6,547.8 1407.1,550.2 1407.1,541.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1410.5,542.6 1410.5,551.9 1417.9,554.3 1417.9,545.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1423.5,547.6 1423.5,556.9 1430.9,559.3 1430.9,550.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1434.2,551.6 1434.2,560.9 1441.6,563.3 1441.6,554.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1446.4,555.8 1446.4,565.1 1453.8,567.5 1453.8,558.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.5,559.9 1456.5,569.1 1463.9,571.5 1463.9,562.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1386.9,555.8 1386.9,565.1 1394.3,567.5 1394.3,558.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1399,560.1 1399,569.3 1406.4,571.7 1406.4,563 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.4,564.2 1411.4,573.5 1418.9,575.9 1418.9,567.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.9,569.2 1422.9,578.4 1430.3,580.8 1430.3,572.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1435.2,573.2 1435.2,582.5 1442.6,584.9 1442.6,576.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.8,577.4 1445.8,586.7 1453.2,589.1 1453.2,580.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1457.5,581.4 1457.5,590.7 1464.9,593.1 1464.9,584.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.8,577.7 1386.8,587 1394.3,589.4 1394.3,580.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1399,581.9 1399,591.2 1406.4,593.6 1406.4,584.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1410.6,586.1 1410.6,595.4 1418.1,597.8 1418.1,589 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.8,591 1422.8,600.3 1430.3,602.7 1430.3,593.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1434.4,595 1434.4,604.3 1441.8,606.7 1441.8,597.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1445.7,599.3 1445.7,608.6 1453.2,611 1453.2,602.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1456.7,603.3 1456.7,612.6 1464.1,615 1464.1,606.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.8,599.5 1386.8,608.7 1394.3,611.1 1394.3,602.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1399,603.7 1399,613 1406.4,615.4 1406.4,606.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1410.6,607.9 1410.6,617.2 1418,619.5 1418,610.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.8,612.8 1422.8,622.1 1430.3,624.5 1430.3,615.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.3,616.8 1434.3,626.1 1441.8,628.5 1441.8,619.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.7,621 1445.7,630.3 1453.2,632.7 1453.2,624 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.6,625.1 1456.6,634.4 1464.1,636.7 1464.1,628 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1386.7,626.4 1386.7,637.2 1394.2,638.6 1394.2,627.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1399.2,629.4 1399.2,640.2 1406.6,641.6 1406.6,630.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.3,632.4 1411.3,643.3 1418.8,644.7 1418.8,633.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.6,635.5 1422.6,646.4 1430.1,647.7 1430.1,636.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1433.9,638.3 1433.9,649.1 1441.3,650.5 1441.3,639.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.1,641.4 1445.1,652.3 1452.6,653.6 1452.6,642.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1456.2,644.4 1456.2,655.3 1463.6,656.7 1463.6,645.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1386.7,648.1 1386.7,658.9 1394.2,660.3 1394.2,649.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1399.2,651.1 1399.2,662 1406.6,663.3 1406.6,652.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.3,654.2 1411.3,665 1418.8,666.4 1418.8,655.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.6,657.3 1422.6,668.1 1430.1,669.5 1430.1,658.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1433.9,660 1433.9,670.8 1441.3,672.2 1441.3,661.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1445.1,663.1 1445.1,674 1452.6,675.4 1452.6,664.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.2,666.2 1456.2,677 1463.6,678.4 1463.6,667.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1387.4,669.2 1387.4,680 1394.9,681.4 1394.9,670.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1399.9,672.2 1399.9,683 1407.4,684.4 1407.4,673.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1412,675.2 1412,686.1 1419.5,687.5 1419.5,676.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1423.3,678.3 1423.3,689.2 1430.8,690.5 1430.8,679.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.6,681 1434.6,691.9 1442,693.3 1442,682.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.8,684.2 1445.8,695 1453.3,696.4 1453.3,685.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.9,687.2 1456.9,698.1 1464.3,699.5 1464.3,688.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1386.5,691.9 1386.5,702.8 1393.9,704.2 1393.9,693.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1398.9,694.9 1398.9,705.8 1406.4,707.2 1406.4,696.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.1,698 1411.1,708.9 1418.5,710.2 1418.5,699.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.3,701.1 1422.3,711.9 1429.8,713.3 1429.8,702.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1433.6,703.8 1433.6,714.7 1441.1,716 1441.1,705.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1444.9,707 1444.9,717.8 1452.3,719.2 1452.3,708.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1455.9,710 1455.9,720.9 1463.4,722.2 1463.4,711.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.5,712.8 1386.5,723.7 1393.9,725 1393.9,714.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1398.9,715.8 1398.9,726.7 1406.4,728 1406.4,717.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1411.1,718.9 1411.1,729.7 1418.5,731.1 1418.5,720.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1422.3,722 1422.3,732.8 1429.8,734.2 1429.8,723.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1433.6,724.7 1433.6,735.5 1441.1,736.9 1441.1,726 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1444.9,727.9 1444.9,738.7 1452.3,740.1 1452.3,729.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1455.9,730.9 1455.9,741.7 1463.4,743.1 1463.4,732.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.8,737.1 1386.8,747.9 1394.3,749.3 1394.3,738.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1398.8,741.4 1398.8,752.3 1406.3,753.7 1406.3,742.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1411.2,742.2 1411.2,753.1 1418.6,754.5 1418.6,743.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.6,745.6 1422.6,756.4 1430.1,757.8 1430.1,746.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.2,748 1434.2,758.9 1441.7,760.2 1441.7,749.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1444.9,749.3 1444.9,760.2 1452.3,761.6 1452.3,750.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1455.9,752.4 1455.9,763.2 1463.4,764.6 1463.4,753.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1384.5,762.1 1384.5,772.4 1393,772.4 1393,762.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1397.1,764.8 1397.1,775.1 1405.7,775.1 1405.7,765.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1409.5,766.5 1409.5,776.8 1418,776.8 1418,767.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1422.7,768.5 1422.7,778.8 1431.2,778.8 1431.2,769.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1434.2,770.2 1434.2,780.5 1442.8,780.5 1442.8,771 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1445.8,772.1 1445.8,782.4 1454.3,782.4 1454.3,772.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1457.2,774.6 1457.2,784.9 1465.7,784.9 1465.7,775.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1386.5,784.7 1386.5,796 1394.4,796.4 1394.4,785.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1397.7,786.3 1397.7,797.6 1405.7,798 1405.7,787.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1409.7,787.2 1409.7,798.4 1417.7,798.8 1417.7,788.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1421.7,788.7 1421.7,799.9 1429.7,800.4 1429.7,789.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1433.8,790.5 1433.8,801.8 1441.8,802.2 1441.8,791.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1445,791.4 1445,802.6 1452.9,803 1452.9,792.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1456.2,792.5 1456.2,803.7 1464.2,804.2 1464.2,793.5 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1386.5"
            y="809.2"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1398.4"
            y="810"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1410.4"
            y="811.1"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1422.1"
            y="811.5"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1433.3"
            y="812.6"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1446"
            y="813.5"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1456.6"
            y="814.1"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1386"
            y="830.8"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1397.9"
            y="831.6"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1409.9"
            y="832.7"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1421.6"
            y="833.1"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1432.8"
            y="834.2"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1445.5"
            y="835.1"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1456.1"
            y="835.7"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1386.5"
            y="853.8"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1398.4"
            y="854.7"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1410.4"
            y="855.8"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1422.1"
            y="856.2"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1433.3"
            y="857.3"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1446"
            y="858.1"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1456.6"
            y="858.8"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1386"
            y="875.4"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1397.9"
            y="876.3"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1409.9"
            y="877.4"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1421.6"
            y="877.8"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1432.8"
            y="878.9"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1445.5"
            y="879.7"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1456.1"
            y="880.4"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1384.9"
            y="897.2"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1396.8"
            y="898"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1408.8"
            y="899.1"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1420.5"
            y="899.5"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1431.7"
            y="900.7"
            className="st6"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1444.4"
            y="901.5"
            className="st3"
            width="8"
            height="10.1"
          />
          <rect
            onMouseEnter={handleHover}
            x="1455"
            y="902.1"
            className="st6"
            width="8"
            height="10.1"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.5,411.9 579.5,423.3 586.5,425 586.5,414.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.6,415.2 591.6,426.6 598.6,428.3 598.6,417.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.3,420.1 603.3,431.5 610.3,433.2 610.3,422.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.2,424.7 615.2,436.1 622.2,437.8 622.2,427.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627,428.1 627,439.5 634,441.2 634,430.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638.4,432.5 638.4,443.9 645.4,445.6 645.4,435.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="648.9,435.6 648.9,447 655.9,448.7 655.9,438.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.5,433.2 579.5,444.6 586.5,446.3 586.5,435.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.6,436.5 591.6,447.9 598.6,449.6 598.6,439 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.3,441.4 603.3,452.8 610.3,454.5 610.3,444 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="615.2,446 615.2,457.4 622.2,459.1 622.2,448.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627,449.4 627,460.8 634,462.5 634,452 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638.4,453.8 638.4,465.3 645.4,467 645.4,456.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="648.9,456.9 648.9,468.3 655.9,470 655.9,459.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579,456.7 579,468.1 586,469.8 586,459.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.1,460 591.1,471.4 598,473.1 598,462.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="602.8,464.9 602.8,476.3 609.8,478 609.8,467.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="614.7,469.5 614.7,480.9 621.7,482.6 621.7,472.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="626.5,472.9 626.5,484.3 633.4,486 633.4,475.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="637.9,477.3 637.9,488.7 644.9,490.4 644.9,479.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="648.4,480.4 648.4,491.8 655.4,493.5 655.4,482.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.5,478.9 579.5,490.3 586.5,492 586.5,481.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.6,482.1 591.6,493.5 598.6,495.2 598.6,484.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.3,487 603.3,498.4 610.3,500.1 610.3,489.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.2,491.6 615.2,503.1 622.2,504.8 622.2,494.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="627,495 627,506.4 634,508.1 634,497.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638.4,499.5 638.4,510.9 645.4,512.6 645.4,502 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="648.9,502.5 648.9,513.9 655.9,515.6 655.9,505.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.5,498.6 579.5,510 586.5,511.7 586.5,501.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.6,501.9 591.6,513.3 598.6,515 598.6,504.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.3,506.8 603.3,518.2 610.3,519.9 610.3,509.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.2,511.4 615.2,522.8 622.2,524.5 622.2,514 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627,514.8 627,526.2 634,527.9 634,517.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="638.4,519.2 638.4,530.6 645.4,532.3 645.4,521.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="648.9,522.3 648.9,533.7 655.9,535.4 655.9,524.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.5,524.5 587.1,525.8 587.1,536.2 579.5,535.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.7,527 599.4,528.3 599.4,538.7 591.7,537.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.8,531.4 611.5,532.7 611.5,543 603.8,542.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="615.2,533.6 622.9,534.9 622.9,545.3 615.2,544.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="627.7,537.9 635.3,539.2 635.3,549.6 627.7,548.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="639.6,540.5 647.2,541.8 647.2,552.1 639.6,551.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="650.1,543.1 657.8,544.3 657.8,554.7 650.1,553.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.6,545.8 587.2,547.1 587.2,557.4 579.6,556.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.8,548.3 599.5,549.6 599.5,559.9 591.8,559.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.9,552.7 611.6,553.9 611.6,564.3 603.9,563.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.3,554.9 623,556.2 623,566.5 615.3,565.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="627.7,559.2 635.4,560.5 635.4,570.9 627.7,570.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="639.7,561.8 647.3,563 647.3,573.4 639.7,572.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="650.2,564.3 657.9,565.6 657.9,576 650.2,575.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.4,569.1 587.1,570.4 587.1,580.8 579.4,580 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.7,571.6 599.3,572.9 599.3,583.3 591.7,582.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.7,576 611.4,577.3 611.4,587.6 603.7,586.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="615.1,578.2 622.8,579.5 622.8,589.8 615.1,589.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="627.6,582.5 635.2,583.8 635.2,594.2 627.6,593.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="639.5,585.1 647.1,586.4 647.1,596.7 639.5,596 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="650,587.7 657.7,588.9 657.7,599.3 650,598.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.2,589.2 586.9,590.5 586.9,600.8 579.2,600.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.5,591.7 599.1,593 599.1,603.3 591.5,602.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.6,596.1 611.2,597.4 611.2,607.7 603.6,607 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="615,598.3 622.6,599.6 622.6,609.9 615,609.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627.4,602.6 635.1,603.9 635.1,614.3 627.4,613.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="639.3,605.2 647,606.4 647,616.8 639.3,616.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="649.9,607.7 657.5,609 657.5,619.4 649.9,618.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.2,613.9 586.9,615.2 586.9,625.6 579.2,624.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.8,615.2 599.5,616.5 599.5,626.9 591.8,626.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.7,617.3 611.4,618.6 611.4,629 603.7,628.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.1,619.6 622.8,620.8 622.8,631.2 615.1,630.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="627.6,623.9 635.2,625.2 635.2,635.5 627.6,634.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="639.5,626.4 647.1,627.7 647.1,638.1 639.5,637.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="650,629 657.7,630.3 657.7,640.6 650,639.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.6,638.7 587.2,639.3 587.2,649.9 579.6,649.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591.1,640.8 598.8,641.4 598.8,651.9 591.1,651.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.4,642.1 611.1,642.7 611.1,653.2 603.4,652.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="614.5,644 622.1,644.6 622.1,655.1 614.5,654.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="626,645 633.7,645.6 633.7,656.1 626,655.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638.1,647.3 645.8,647.9 645.8,658.4 638.1,657.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="649,649 656.7,649.6 656.7,660.1 649,659.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.7,659.9 587.4,660.5 587.4,671 579.7,670.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.3,662 599,662.5 599,673.1 591.3,672.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.6,663.3 611.2,663.8 611.2,674.4 603.6,673.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="614.6,665.1 622.3,665.7 622.3,676.3 614.6,675.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="626.2,666.2 633.9,666.7 633.9,677.3 626.2,676.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="638.3,668.5 646,669.1 646,679.6 638.3,678.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="649.2,670.2 656.9,670.8 656.9,681.3 649.2,680.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.4,680.4 587.1,681 587.1,691.6 579.4,690.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="591,682.5 598.6,683.1 598.6,693.6 591,692.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="603.2,683.8 610.9,684.4 610.9,694.9 603.2,694.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="614.3,685.7 622,686.2 622,696.8 614.3,696.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="625.9,686.7 633.5,687.3 633.5,697.8 625.9,697.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638,689 645.6,689.6 645.6,700.1 638,699.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="648.9,690.7 656.5,691.3 656.5,701.8 648.9,701.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="580.3,700.5 587.9,701 587.9,711.6 580.3,710.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.8,702.5 599.5,703.1 599.5,713.6 591.8,712.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="604.1,703.8 611.7,704.4 611.7,714.9 604.1,714.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="615.1,705.7 622.8,706.3 622.8,716.8 615.1,716.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="626.7,706.7 634.4,707.3 634.4,717.8 626.7,717.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="638.8,709 646.5,709.6 646.5,720.2 638.8,719.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="649.7,710.7 657.4,711.3 657.4,721.9 649.7,721.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="579.9,723.5 587.6,724.1 587.6,734.6 579.9,734 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="592.6,725.6 600.2,726.1 600.2,736.7 592.6,736 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="604.8,726.9 612.5,727.5 612.5,738 604.8,737.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="614.8,728.7 622.5,729.3 622.5,739.9 614.8,739.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="626.4,729.8 634,730.4 634,740.9 626.4,740.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="638.5,732.1 646.1,732.7 646.1,743.2 638.5,742.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="649.4,733.8 657,734.4 657,744.9 649.4,744.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="581.2,745.8 588.8,746.4 588.8,757 581.2,756.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="579.4,773.4 588.2,774 588.2,784.5 579.4,783.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="590.5,773.8 598.1,774.4 598.1,784.9 590.5,784.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="602.4,774.3 611.1,774.9 611.1,785.4 602.4,784.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="613.8,776 621.4,776.5 621.4,787.1 613.8,786.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627,777.3 634.6,777.9 634.6,788.4 627,787.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="639.7,777.2 647.4,777.8 647.4,788.3 639.7,787.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="650.2,778.1 657.9,778.7 657.9,789.2 650.2,788.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="580.1,797.5 587.7,798.1 587.7,808.7 580.1,808 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="592.1,797 599.7,797.6 599.7,808.2 592.1,807.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="603.8,797.3 610.4,797.9 610.4,808.4 603.8,807.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="614.3,798.4 622,799 622,809.5 614.3,808.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="626.2,799.3 633.9,799.9 633.9,810.5 626.2,809.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="639.3,800.3 647,800.9 647,811.5 639.3,810.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="651.8,801.3 659.5,801.9 659.5,812.4 651.8,811.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="581.5,820.3 589.2,820.8 589.2,831.4 581.5,830.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="592.2,821.5 599.8,822.1 599.8,832.6 592.2,832 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="605.2,822.3 612.8,822.8 612.8,833.4 605.2,832.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="592.5,840.6 600.2,841.2 600.2,851.8 592.5,851.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="614.7,857.8 621.3,858.4 621.3,868.9 614.7,868.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="639.1,821 646.8,821.6 646.8,832.1 639.1,831.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="651.8,821.7 659.5,822.2 659.5,832.8 651.8,832.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="591.7,747.9 599.3,748.5 599.3,759 591.7,758.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="605,749.2 612.7,749.8 612.7,760.3 605,759.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="615,751.1 622.6,751.6 622.6,762.2 615,761.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="627.7,752.1 634.2,752.7 634.2,763.2 627.7,762.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="638.6,754.4 646.3,755 646.3,765.5 638.6,764.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st4"
            points="650.6,756.1 658.3,756.7 658.3,767.2 650.6,766.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1832.9,600.3 1832.9,607.6 1839.8,606.3 1839.8,599.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1822.4,603.2 1822.4,610.6 1829.3,609.2 1829.3,602.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1810.6,605.6 1810.6,613 1817.5,611.6 1817.5,604.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1800.5,609 1800.5,616.4 1807.4,615 1807.4,608 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1789.2,611 1789.2,618.3 1796.2,616.9 1796.2,610 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1779.3,614 1779.3,621.4 1786.2,620 1786.2,613 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1768.4,615.9 1768.4,623.3 1775.3,621.9 1775.3,615 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.3,614.7 1833.3,622 1840.2,620.6 1840.2,613.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1822.8,617.6 1822.8,625 1829.7,623.6 1829.7,616.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1810.9,620 1810.9,627.4 1817.9,626 1817.9,619 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1800.8,623.4 1800.3,630.3 1807.3,628.9 1807.8,622.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1789.6,625.4 1789.6,632.7 1796.5,631.3 1796.5,624.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1779.6,628.4 1779.6,635.8 1786.5,634.4 1786.5,627.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1768.7,630.3 1768.7,637.7 1775.7,636.3 1775.7,629.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1832.7,628.4 1833.2,636.2 1840.1,634.9 1839.6,627.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1821.7,630.8 1821.7,638.2 1828.7,636.8 1828.7,629.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.9,634.2 1810.9,641.6 1817.8,640.2 1817.8,633.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1799.8,636.6 1799.8,644 1806.7,642.6 1806.7,635.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.6,639.6 1789.6,646.9 1796.5,645.5 1796.5,638.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.6,641.6 1778.6,649 1785.5,647.6 1785.5,640.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768.7,644.5 1768.7,651.9 1775.6,650.5 1775.6,643.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1833.6,644 1833.5,651.3 1840.5,650.1 1840.6,643.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1822.1,645.7 1822,653.1 1828.9,651.8 1829.1,644.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1811.2,648.9 1810.6,655.8 1817.6,654.5 1818.2,648.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1800.1,651.2 1800,658.5 1806.9,657.3 1807,650.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.8,653.9 1789.7,661.3 1796.6,660 1796.7,653.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.8,655.8 1778.6,663.2 1785.6,661.9 1785.7,654.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768.9,658.6 1768.7,666 1775.7,664.7 1775.8,657.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1832.7,658.4 1832.5,665.8 1839.5,664.5 1839.6,657.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1821.7,660.6 1821.5,668 1828.5,666.7 1828.6,659.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.8,663.9 1810.6,671.2 1817.6,669.9 1817.7,663 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1799.6,666.1 1799.5,673.5 1806.4,672.2 1806.5,665.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1788.8,668.3 1788.7,675.7 1796.1,674.9 1796.3,668 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1778.8,671.2 1778.2,678.1 1785.1,676.8 1785.7,670.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1767.9,673 1767.8,680.4 1774.7,679.1 1774.8,672.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1767.8,685.7 1767.8,692.3 1774.1,691 1774.1,685.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1779.3,684.7 1779.1,690.5 1785.2,689.8 1785.2,684.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1789.2,682.4 1789.2,687.8 1795.2,687.8 1795.2,681.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1800,680.9 1800,686.9 1807.2,686.1 1807.2,680.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1810.4,678.1 1810.4,683.7 1817.9,683.1 1817.7,677.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1822,676.7 1822,682.2 1829.1,682.2 1829.1,676.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.3,674 1833.3,679.7 1840.2,679.3 1840.2,673.5 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1768.2"
            y="699.7"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1779.2"
            y="698.2"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1789.7"
            y="695.8"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1800.2,694 1806.8,694 1806.8,699.9 1800.7,700.4 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1810.4"
            y="692.5"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1822.6"
            y="690.8"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1833.8"
            y="688.5"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1768.9"
            y="714.1"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1778.9"
            y="711.7"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1790.4"
            y="710.2"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1800.4"
            y="707.9"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.7,706.4 1817.8,706.9 1817.8,712.8 1810.7,712.3 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1822.4"
            y="704.2"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1834.5"
            y="703"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1768.1"
            y="727.8"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1779.1"
            y="726.3"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1789.6"
            y="723.9"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1800.1"
            y="722.1"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1810.3"
            y="720.6"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1822"
            y="718.4"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1833.7"
            y="716.6"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1768.6"
            y="741.9"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1779.1"
            y="740"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1790.1"
            y="738"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1800.6"
            y="736.2"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1810.8"
            y="734.7"
            className="st3"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1822.5"
            y="732.5"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1834.2"
            y="730.8"
            className="st6"
            width="6.6"
            height="5.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768.4,754.3 1774.1,754.3 1774.1,760.1 1768.6,760.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.9,753.4 1784.6,753.4 1784.6,759.2 1779.1,759.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.9,752.2 1795.5,752.2 1795.5,758 1790,758 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1800.5,750.9 1806.1,750.9 1806.1,756.7 1800.6,756.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1811.6,749.9 1817.3,749.9 1817.3,755.7 1811.8,755.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1822.7,748.4 1828.3,748.4 1828.3,754.2 1822.8,754.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1833.5,747.1 1839.2,747.1 1839.2,752.9 1833.7,752.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1768.8,768.8 1774.5,768.8 1774.5,774.6 1769,774.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1779.3,767.9 1785,767.9 1785,773.7 1779.4,773.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1790.2,766.7 1795.9,766.7 1795.9,772.5 1790.4,772.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1800.8,765.4 1806.5,765.4 1806.5,771.2 1801,771.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1812,764.4 1817.7,764.4 1817.7,770.2 1812.1,770.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1823,762.9 1828.7,762.9 1828.7,768.7 1823.2,768.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.9,761.6 1839.5,761.6 1839.5,767.4 1834,767.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1769,782.3 1774.7,782.3 1774.7,788.1 1769.2,788.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1779.5,781.4 1785.2,781.4 1785.2,787.2 1779.7,787.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1790.5,780.2 1796.1,780.2 1796.1,786 1790.6,786 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1801.1,778.9 1806.7,778.9 1806.7,784.7 1801.2,784.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1812.2,777.9 1817.9,777.9 1817.9,783.7 1812.4,783.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1823.3,776.4 1828.9,776.4 1828.9,782.2 1823.4,782.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1834.1,775.1 1839.8,775.1 1839.8,780.9 1834.3,780.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768.4,796.1 1774.7,796.1 1774.7,801.8 1768.6,801.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.7,795.4 1785,795.4 1785,801.1 1778.9,801.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.7,794.9 1796,794.9 1796,800.6 1789.9,800.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1800.2,793.9 1806.4,793.9 1806.4,799.6 1800.3,799.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.8,792.9 1817,792.9 1817,798.6 1810.9,798.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1822.2,792.1 1828.5,792.1 1828.5,797.8 1822.4,797.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1833.7,791.3 1839.9,791.3 1839.9,797 1833.8,797 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768.6,810 1774.8,810 1774.8,815.7 1768.7,815.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.8,809.3 1785.1,809.3 1785.1,815 1779,815 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.8,808.9 1796.1,808.9 1796.1,814.5 1790,814.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1800.3,807.8 1806.6,807.8 1806.6,813.5 1800.5,813.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.9,806.9 1817.2,806.9 1817.2,812.6 1811.1,812.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1822.3,806.1 1828.6,806.1 1828.6,811.8 1822.5,811.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.8,805.3 1840,805.3 1840,810.9 1833.9,810.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1768.6,824.3 1774.8,824.3 1774.8,830 1768.7,830 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1778.8,823.6 1785.1,823.6 1785.1,829.3 1779,829.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1789.8,823.1 1796.1,823.1 1796.1,828.8 1790,828.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1800.3,822.1 1806.6,822.1 1806.6,827.8 1800.5,827.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1810.9,821.2 1817.2,821.2 1817.2,826.8 1811.1,826.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1822.3,820.3 1828.6,820.3 1828.6,826 1822.5,826 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.8,819.5 1840,819.5 1840,825.2 1833.9,825.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1768,838 1774.2,838 1774.2,843.7 1768.1,843.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.2,837.3 1784.5,837.3 1784.5,843 1778.4,843 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1789.2,836.8 1795.5,836.8 1795.5,842.5 1789.4,842.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1799.7,835.8 1806,835.8 1806,841.5 1799.9,841.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1810.3,834.9 1816.6,834.9 1816.6,840.5 1810.5,840.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1821.7,834 1828,834 1828,839.7 1821.9,839.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1833.2,833.2 1839.5,833.2 1839.5,838.9 1833.4,838.9 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1778.2"
            y="850.8"
            className="st3"
            width="6.3"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1789.5"
            y="850.9"
            className="st6"
            width="6.3"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1800.3"
            y="850.7"
            className="st3"
            width="6.3"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1811.1"
            y="850.7"
            className="st3"
            width="6.3"
            height="5.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1821.6"
            y="850.1"
            className="st3"
            width="6.3"
            height="5.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1768,864.5 1768,869.5 1774.8,869.5 1774.7,864.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1778.8,865.1 1778.8,870.1 1785.7,870.1 1785.5,865.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1790.1,865.2 1790.1,870.2 1797,870.2 1796.9,865.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1799.7,864.8 1799.7,869.8 1806.5,869.8 1806.4,864.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1810.9,864.6 1810.9,869.6 1817.7,869.6 1817.6,864.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1833.6,864.2 1833.6,869.2 1840.5,869.2 1840.4,864.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.5,598.5 1849.5,605.6 1853.8,606.6 1853.8,600.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.9,600.5 1856.9,607.6 1861.2,608.6 1861.2,602.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.1,603.6 1864.1,610.6 1868.4,611.6 1868.4,605.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.4,606.4 1871.4,613.4 1875.7,614.5 1875.7,608 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.7,608.5 1878.7,615.5 1883,616.5 1883,610 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.7,611.2 1885.7,618.2 1890,619.3 1890,612.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.2,613.1 1892.2,620.1 1896.5,621.2 1896.5,614.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.5,611.7 1849.5,618.7 1853.8,619.7 1853.8,613.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.9,613.7 1856.9,620.7 1861.2,621.7 1861.2,615.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.1,616.7 1864.1,623.7 1868.4,624.7 1868.4,618.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.4,619.5 1871.4,626.5 1875.7,627.6 1875.7,621.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878.7,621.6 1878.7,628.6 1883,629.7 1883,623.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.7,624.3 1885.7,631.3 1890,632.4 1890,625.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.2,626.2 1892.2,633.2 1896.5,634.3 1896.5,627.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.1,626.1 1849.1,633.1 1853.4,634.2 1853.4,627.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.6,628.1 1856.6,635.1 1860.9,636.2 1860.9,629.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1863.8,631.1 1863.8,638.1 1868.1,639.2 1868.1,632.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.1,634 1871.1,641 1875.4,642 1875.4,635.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.3,636 1878.3,643.1 1882.6,644.1 1882.6,637.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.4,638.8 1885.4,645.8 1889.7,646.8 1889.7,640.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1891.8,640.7 1891.8,647.7 1896.1,648.7 1896.1,642.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.5,639.7 1849.5,646.7 1853.8,647.8 1853.8,641.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.9,641.7 1856.9,648.7 1861.2,649.8 1861.2,643.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.1,644.7 1864.1,651.7 1868.4,652.8 1868.4,646.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.4,647.6 1871.4,654.6 1875.7,655.6 1875.7,649.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878.7,649.6 1878.7,656.7 1883,657.7 1883,651.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.7,652.4 1885.7,659.4 1890,660.4 1890,654 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.2,654.3 1892.2,661.3 1896.5,662.3 1896.5,655.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.5,651.9 1849.5,658.9 1853.8,659.9 1853.8,653.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.9,653.9 1856.9,660.9 1861.2,661.9 1861.2,655.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.1,656.9 1864.1,663.9 1868.4,664.9 1868.4,658.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.4,659.7 1871.4,666.7 1875.7,667.8 1875.7,661.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.7,661.8 1878.7,668.8 1883,669.9 1883,663.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.7,664.5 1885.7,671.6 1890,672.6 1890,666.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.2,666.4 1892.2,673.4 1896.5,674.5 1896.5,668 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.5,667.8 1854.2,668.6 1854.2,674.9 1849.5,674.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1857,669.3 1861.7,670.1 1861.7,676.5 1857,676 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.4,672 1869.1,672.8 1869.1,679.2 1864.4,678.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.4,673.4 1876.1,674.2 1876.1,680.5 1871.4,680.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1879.1,676 1883.8,676.8 1883.8,683.2 1879.1,682.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1886.4,677.6 1891.1,678.4 1891.1,684.8 1886.4,684.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.9,679.2 1897.6,680 1897.6,686.3 1892.9,685.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.5,680.9 1854.2,681.7 1854.2,688 1849.5,687.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1857,682.4 1861.8,683.2 1861.8,689.6 1857,689.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.5,685.1 1869.2,685.9 1869.2,692.3 1864.5,691.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.5,686.5 1876.2,687.2 1876.2,693.6 1871.5,693.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1879.1,689.1 1883.8,689.9 1883.8,696.3 1879.1,695.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1886.5,690.7 1891.2,691.5 1891.2,697.9 1886.5,697.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.9,692.3 1897.7,693.1 1897.7,699.4 1892.9,699 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.4,695.2 1854.1,696 1854.1,702.4 1849.4,701.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.9,696.8 1861.7,697.5 1861.7,703.9 1856.9,703.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.4,699.4 1869.1,700.2 1869.1,706.6 1864.4,706.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.4,700.8 1876.1,701.6 1876.1,708 1871.4,707.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1879,703.5 1883.7,704.2 1883.7,710.6 1879,710.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1886.4,705 1891.1,705.8 1891.1,712.2 1886.4,711.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.8,706.6 1897.6,707.4 1897.6,713.8 1892.8,713.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.3,707.6 1854,708.3 1854,714.7 1849.3,714.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.8,709.1 1861.5,709.9 1861.5,716.3 1856.8,715.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.3,711.8 1869,712.6 1869,719 1864.3,718.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.3,713.2 1876,713.9 1876,720.3 1871.3,719.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.9,715.8 1883.6,716.6 1883.6,723 1878.9,722.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1886.2,717.4 1891,718.2 1891,724.5 1886.2,724.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.7,719 1897.4,719.7 1897.4,726.1 1892.7,725.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.3,722.8 1854,723.5 1854,729.9 1849.3,729.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1857,723.6 1861.8,724.4 1861.8,730.7 1857,730.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.4,724.9 1869.1,725.6 1869.1,732 1864.4,731.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.4,726.2 1876.1,727 1876.1,733.4 1871.4,732.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1879,728.9 1883.7,729.7 1883.7,736.1 1879,735.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1886.4,730.5 1891.1,731.2 1891.1,737.6 1886.4,737.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.8,732 1897.6,732.8 1897.6,739.2 1892.8,738.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.5,738 1854.2,738.4 1854.2,744.9 1849.5,744.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.6,739.3 1861.3,739.6 1861.3,746.1 1856.6,745.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.2,740.1 1868.9,740.5 1868.9,746.9 1864.2,746.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871,741.2 1875.7,741.6 1875.7,748.1 1871,747.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.1,741.9 1882.8,742.2 1882.8,748.7 1878.1,748.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.5,743.3 1890.2,743.7 1890.2,750.1 1885.5,749.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.2,744.4 1896.9,744.7 1896.9,751.2 1892.2,750.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.6,751 1854.3,751.4 1854.3,757.9 1849.6,757.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.7,752.3 1861.4,752.7 1861.4,759.1 1856.7,758.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.3,753.1 1869,753.5 1869,759.9 1864.3,759.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.1,754.3 1875.8,754.6 1875.8,761.1 1871.1,760.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878.2,754.9 1882.9,755.2 1882.9,761.7 1878.2,761.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.6,756.3 1890.3,756.7 1890.3,763.2 1885.6,762.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.3,757.4 1897,757.7 1897,764.2 1892.3,763.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.4,763.7 1854.1,764 1854.1,770.5 1849.4,770.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.5,764.9 1861.2,765.3 1861.2,771.8 1856.5,771.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.1,765.7 1868.8,766.1 1868.8,772.6 1864.1,772.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1870.9,766.9 1875.6,767.2 1875.6,773.7 1870.9,773.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878,767.5 1882.7,767.9 1882.7,774.3 1878,773.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.4,768.9 1890.1,769.3 1890.1,775.8 1885.4,775.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.1,770 1896.8,770.3 1896.8,776.8 1892.1,776.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.9,776 1854.6,776.3 1854.6,782.8 1849.9,782.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1857,777.2 1861.8,777.6 1861.8,784.1 1857,783.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.6,778 1869.3,778.4 1869.3,784.9 1864.6,784.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.4,779.2 1876.1,779.5 1876.1,786 1871.4,785.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878.5,779.8 1883.2,780.2 1883.2,786.7 1878.5,786.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.9,781.3 1890.6,781.6 1890.6,788.1 1885.9,787.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.6,782.3 1897.3,782.7 1897.3,789.1 1892.6,788.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.7,790.2 1854.4,790.5 1854.4,797 1849.7,796.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.8,791.4 1861.5,791.8 1861.5,798.3 1856.8,797.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.4,792.2 1869.1,792.6 1869.1,799.1 1864.4,798.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1871.2,793.4 1875.9,793.7 1875.9,800.2 1871.2,799.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878.3,794 1883,794.4 1883,800.8 1878.3,800.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.7,795.4 1890.4,795.8 1890.4,802.3 1885.7,801.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.4,796.5 1897.1,796.8 1897.1,803.3 1892.4,802.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.8,803.9 1854.5,804.2 1854.5,810.7 1849.8,810.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1849.4,820.8 1854.1,821.2 1854.1,827.7 1849.4,827.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.2,821.1 1860.9,821.4 1860.9,827.9 1856.2,827.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1863.5,821.4 1868.2,821.7 1868.2,828.2 1863.5,827.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1870.5,822.4 1875.3,822.8 1875.3,829.2 1870.5,828.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1878,823.2 1882.7,823.6 1882.7,830.1 1878,829.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1885.8,823.2 1890.5,823.5 1890.5,830 1885.8,829.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1892.9,823.7 1897.7,824.1 1897.7,830.6 1892.9,830.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1849.8,835.7 1854.5,836 1854.5,842.5 1849.8,842.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1856.5,835.4 1861.2,835.7 1861.2,842.2 1856.5,841.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1863.7,835.5 1868.5,835.9 1868.5,842.4 1863.7,842 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1870.9,836.2 1875.6,836.6 1875.6,843.1 1870.9,842.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.2,836.8 1882.9,837.1 1882.9,843.6 1878.2,843.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1886.2,837.4 1891,837.8 1891,844.2 1886.2,843.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1893.3,838 1898,838.4 1898,844.8 1893.3,844.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1850,849.6 1854.7,850 1854.7,856.5 1850,856.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1857.3,850.4 1862,850.8 1862,857.3 1857.3,856.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1864.6,850.9 1869.3,851.2 1869.3,857.7 1864.6,857.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1857.5,862.2 1862.2,862.5 1862.2,869 1857.5,868.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1870.4,872.7 1875.2,873.1 1875.2,879.6 1870.4,879.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1886.1,850.1 1890.9,850.5 1890.9,857 1886.1,856.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1893.3,850.5 1898,850.9 1898,857.3 1893.3,856.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1856.9,805.1 1861.7,805.5 1861.7,812 1856.9,811.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1864.5,805.9 1869.2,806.3 1869.2,812.8 1864.5,812.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1871.3,807.1 1876,807.5 1876,813.9 1871.3,813.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1878.4,807.7 1883.1,808.1 1883.1,814.6 1878.4,814.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1885.8,809.2 1890.5,809.5 1890.5,816 1885.8,815.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1892.5,810.2 1897.2,810.6 1897.2,817 1892.5,816.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1617.3,329.3 1617.3,344.7 1630.8,341.8 1630.8,327.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1596,334.4 1596,349.8 1609.4,346.9 1609.4,332.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1573.9,340.5 1573.9,355.9 1587.4,353 1587.4,338.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1553.3,346.5 1553.3,361.9 1566.8,359 1566.8,344.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1532.4,351.6 1532.4,367 1545.9,364.1 1545.9,349.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512,357 1512,372.4 1525.5,369.5 1525.5,354.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1491.8,362.1 1491.8,377.5 1505.3,374.5 1505.3,360 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1618,359.4 1618,374.8 1631.5,371.9 1631.5,357.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1596.7,364.5 1596.7,379.9 1610.1,377 1610.1,362.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1574.6,370.5 1574.6,385.9 1588.1,383 1588.1,368.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1554,376.6 1554,392 1567.5,389.1 1567.5,374.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1533.1,381.7 1533.1,397.1 1546.6,394.2 1546.6,379.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512.7,387 1512.7,402.4 1526.2,399.5 1526.2,385 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1492.5,392.1 1492.5,407.5 1506,404.6 1506,390.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1617,388 1617,403.4 1630.4,400.5 1630.4,385.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1595.6,393.1 1595.6,408.5 1609.1,405.6 1609.1,391 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1573.6,399.2 1573.6,414.6 1587.1,411.6 1587.1,397.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1553,405.2 1553,420.6 1566.4,417.7 1566.4,403.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1532.1,410.3 1532.1,425.7 1545.5,422.8 1545.5,408.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1511.7,415.6 1511.7,431 1525.1,428.1 1525.1,413.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1491.5,420.7 1491.5,436.1 1504.9,433.2 1504.9,418.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1617.8,419.5 1617.6,434.9 1631.1,432.3 1631.3,417.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1596.4,424.3 1596.1,439.7 1609.6,437 1609.9,422.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1574.3,429.9 1574,445.3 1587.5,442.7 1587.7,428.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1553.5,435.6 1553.3,451 1566.8,448.3 1567,433.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1532.6,440.3 1532.3,455.7 1545.8,453.1 1546,438.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512.1,445.3 1511.8,460.7 1525.3,458 1525.5,443.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1491.8,450.1 1491.6,465.5 1505.1,462.8 1505.3,448.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1616.9,450.7 1616.6,466.1 1630.1,463.4 1630.4,448.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1595.5,455.4 1595.2,470.8 1608.7,468.1 1608.9,453.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1573.3,461.1 1573.1,476.5 1586.6,473.8 1586.8,459.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1552.6,466.8 1552.3,482.1 1565.8,479.5 1566.1,464.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1531.6,471.5 1531.4,486.9 1544.9,484.2 1545.1,469.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1511.1,476.4 1510.9,491.8 1524.4,489.2 1524.6,474.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1490.9,481.2 1490.6,496.6 1504.1,493.9 1504.4,479.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1490.6,507.7 1490.6,521.5 1503,518.8 1503,506.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512,504.6 1511.8,516.6 1523.6,515.2 1523.6,503.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1532.4,500.9 1532.3,512.2 1544,512.2 1544,499.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1552.3,496.6 1552.3,509.1 1566.4,507.4 1566.4,495.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1573.6,491.8 1573.6,503.6 1588.1,502.2 1587.7,490 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1595.2,488 1595.2,499.4 1608.9,499.4 1608.9,486.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1618,483.2 1618,495.3 1631.5,494.3 1631.5,482.1 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1491.5"
            y="536.9"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1511.9"
            y="532.9"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1533.2"
            y="528.7"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1553.7"
            y="525"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1573.6"
            y="521.9"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1596.4"
            y="517.2"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1619.1"
            y="513.6"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1492"
            y="566"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1512.4"
            y="562"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1533.7"
            y="557.8"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1554.2"
            y="554.1"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1574.1"
            y="550.9"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1596.8"
            y="546.3"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1619.6"
            y="542.7"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1491.3"
            y="595.6"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1511.7"
            y="591.5"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1533"
            y="587.4"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1553.5"
            y="583.7"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1573.4"
            y="580.5"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1596.2"
            y="575.9"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1618.9"
            y="572.3"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1492.3"
            y="625.1"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1512.7"
            y="621.1"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1534"
            y="617"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1554.5"
            y="613.3"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1574.4"
            y="610.1"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1597.2"
            y="605.5"
            className="st3"
            width="12.9"
            height="12.2"
          />
          <rect
            onMouseEnter={handleHover}
            x="1619.9"
            y="601.9"
            className="st6"
            width="12.9"
            height="12.2"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1492,651 1503,651 1503,663.1 1492.3,663.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512.4,649 1523.4,649 1523.4,661.1 1512.7,661.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1533.6,646.6 1544.7,646.6 1544.7,658.7 1534,658.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1554.3,643.9 1565.3,643.9 1565.3,656 1554.6,656 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1576,641.7 1587,641.7 1587,653.9 1576.3,653.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1597.4,638.6 1608.5,638.6 1608.5,650.7 1597.7,650.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1618.5,635.9 1629.6,635.9 1629.6,648 1618.9,648 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1492.6,681.3 1503.7,681.3 1503.7,693.4 1493,693.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1513.1,679.3 1524.1,679.3 1524.1,691.4 1513.4,691.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1534.3,676.9 1545.4,676.9 1545.4,689 1534.7,689 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1555,674.2 1566,674.2 1566,686.4 1555.3,686.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1576.7,672 1587.7,672 1587.7,684.2 1577,684.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1598.1,668.9 1609.1,668.9 1609.1,681 1598.4,681 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1619.2,666.2 1630.3,666.2 1630.3,678.4 1619.6,678.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1493.1,709.4 1504.1,709.4 1504.1,721.6 1493.4,721.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1513.5,707.5 1524.5,707.5 1524.5,719.6 1513.8,719.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1534.8,705.1 1545.8,705.1 1545.8,717.2 1535.1,717.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1555.5,702.4 1566.5,702.4 1566.5,714.5 1555.8,714.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1577.1,700.2 1588.1,700.2 1588.1,712.3 1577.4,712.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1598.6,697.1 1609.6,697.1 1609.6,709.2 1598.9,709.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1619.7,694.4 1630.7,694.4 1630.7,706.5 1620,706.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1492,738.2 1504.1,738.2 1504.1,750.1 1492.3,750.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1512,736.8 1524.1,736.8 1524.1,748.7 1512.3,748.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1533.3,735.8 1545.5,735.8 1545.5,747.7 1533.6,747.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1553.7,733.6 1565.9,733.6 1565.9,745.5 1554,745.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1574.3,731.7 1586.5,731.7 1586.5,743.6 1574.6,743.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1596.6,730 1608.7,730 1608.7,741.9 1596.9,741.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1618.8,728.3 1631,728.3 1631,740.2 1619.1,740.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1492.2,767.3 1504.4,767.3 1504.4,779.2 1492.5,779.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512.2,765.9 1524.4,765.9 1524.4,777.8 1512.5,777.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1533.5,764.9 1545.7,764.9 1545.7,776.8 1533.8,776.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1553.9,762.7 1566.1,762.7 1566.1,774.6 1554.3,774.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1574.5,760.8 1586.7,760.8 1586.7,772.7 1574.9,772.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1596.8,759.1 1609,759.1 1609,771 1597.1,771 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1619.1,757.4 1631.2,757.4 1631.2,769.3 1619.4,769.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1492.2,797.2 1504.4,797.2 1504.4,809 1492.5,809 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1512.2,795.7 1524.4,795.7 1524.4,807.6 1512.5,807.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1533.5,794.7 1545.7,794.7 1545.7,806.6 1533.8,806.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1553.9,792.6 1566.1,792.6 1566.1,804.4 1554.3,804.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1574.5,790.6 1586.7,790.6 1586.7,802.5 1574.9,802.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1596.8,788.9 1609,788.9 1609,800.8 1597.1,800.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1619.1,787.2 1631.2,787.2 1631.2,799.1 1619.4,799.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1491,825.8 1503.2,825.8 1503.2,837.7 1491.3,837.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1511,824.3 1523.2,824.3 1523.2,836.2 1511.3,836.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1532.4,823.3 1544.5,823.3 1544.5,835.2 1532.7,835.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1552.8,821.2 1565,821.2 1565,833 1553.1,833 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1573.4,819.2 1585.6,819.2 1585.6,831.1 1573.7,831.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1595.6,817.5 1607.8,817.5 1607.8,829.4 1596,829.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1617.9,815.8 1630.1,815.8 1630.1,827.7 1618.2,827.7 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1511"
            y="852.4"
            className="st3"
            width="12.2"
            height="12.4"
          />
          <rect
            onMouseEnter={handleHover}
            x="1532.8"
            y="852.7"
            className="st3"
            width="12.2"
            height="12.4"
          />
          <rect
            onMouseEnter={handleHover}
            x="1553.9"
            y="852.2"
            className="st6"
            width="12.2"
            height="12.4"
          />
          <rect
            onMouseEnter={handleHover}
            x="1575"
            y="852.2"
            className="st3"
            width="12.2"
            height="12.4"
          />
          <rect
            onMouseEnter={handleHover}
            x="1595.4"
            y="851"
            className="st6"
            width="12.2"
            height="12.4"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1491,881.1 1491,891.5 1504.4,891.5 1504.1,881.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1512.1,882.4 1512.1,892.8 1525.5,892.8 1525.2,882.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1534.2,882.6 1534.2,893.1 1547.5,893.1 1547.3,882.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1552.7,881.7 1552.7,892.1 1566.1,892.1 1565.8,881.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1574.5,881.4 1574.5,891.8 1587.8,891.8 1587.6,881.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1618.7,880.4 1618.7,890.9 1632.1,890.9 1631.8,880.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1649.6,325.7 1649.6,340.4 1657.9,342.5 1657.9,329 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1664,329.9 1664,344.5 1672.4,346.7 1672.4,333.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.1,336.2 1678.1,350.8 1686.4,353 1686.4,339.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692.3,342.1 1692.3,356.8 1700.7,359 1700.7,345.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1706.4,346.5 1706.4,361.1 1714.7,363.3 1714.7,349.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1720,352.2 1720,366.8 1728.3,369 1728.3,355.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1732.6,356.1 1732.6,370.7 1741,372.9 1741,359.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.6,353.1 1649.6,367.8 1657.9,369.9 1657.9,356.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664,357.3 1664,371.9 1672.4,374.1 1672.4,360.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1678.1,363.6 1678.1,378.2 1686.4,380.4 1686.4,366.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1692.3,369.5 1692.3,384.2 1700.7,386.4 1700.7,372.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1706.4,373.9 1706.4,388.5 1714.7,390.7 1714.7,377.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1720,379.6 1720,394.2 1728.3,396.4 1728.3,382.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1732.6,383.5 1732.6,398.1 1741,400.3 1741,386.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1648.9,383.3 1648.9,397.9 1657.3,400.1 1657.3,386.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1663.4,387.5 1663.4,402.1 1671.7,404.3 1671.7,390.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1677.4,393.8 1677.4,408.4 1685.8,410.6 1685.8,397 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1691.7,399.7 1691.7,414.3 1700,416.5 1700,403 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.7,404 1705.7,418.7 1714.1,420.9 1714.1,407.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1719.4,409.7 1719.4,424.4 1727.7,426.6 1727.7,413 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1732,413.7 1732,428.3 1740.4,430.5 1740.4,416.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.6,411.7 1649.6,426.3 1657.9,428.5 1657.9,415 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664,415.9 1664,430.5 1672.4,432.7 1672.4,419.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1678.1,422.2 1678.1,436.8 1686.4,439 1686.4,425.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1692.3,428.1 1692.3,442.8 1700.7,444.9 1700.7,431.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1706.4,432.4 1706.4,447.1 1714.7,449.3 1714.7,435.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1720,438.2 1720,452.8 1728.3,455 1728.3,441.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1732.6,442.1 1732.6,456.7 1741,458.9 1741,445.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1649.6,437.1 1649.6,451.7 1657.9,453.9 1657.9,440.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1664,441.3 1664,455.9 1672.4,458.1 1672.4,444.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.1,447.6 1678.1,462.2 1686.4,464.4 1686.4,450.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692.3,453.5 1692.3,468.1 1700.7,470.3 1700.7,456.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1706.4,457.8 1706.4,472.5 1714.7,474.6 1714.7,461.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1720,463.5 1720,478.2 1728.3,480.4 1728.3,466.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1732.6,467.5 1732.6,482.1 1741,484.3 1741,470.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1649.6,470.3 1658.7,471.9 1658.7,485.3 1649.6,484.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1664.2,473.5 1673.4,475.2 1673.4,488.5 1664.2,487.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.7,479.2 1687.8,480.8 1687.8,494.1 1678.7,493.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692.3,482 1701.5,483.6 1701.5,496.9 1692.3,496 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1707.2,487.6 1716.3,489.2 1716.3,502.5 1707.2,501.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1721.4,490.8 1730.6,492.5 1730.6,505.8 1721.4,504.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1734,494.1 1743.2,495.8 1743.2,509.1 1734,508.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.7,497.6 1658.8,499.3 1658.8,512.6 1649.7,511.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664.3,500.9 1673.5,502.5 1673.5,515.8 1664.3,514.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1678.8,506.5 1687.9,508.1 1687.9,521.4 1678.8,520.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1692.4,509.3 1701.6,510.9 1701.6,524.3 1692.4,523.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1707.3,514.9 1716.4,516.5 1716.4,529.8 1707.3,528.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1721.5,518.2 1730.7,519.8 1730.7,533.1 1721.5,532.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1734.1,521.4 1743.3,523.1 1743.3,536.4 1734.1,535.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.5,527.6 1658.6,529.2 1658.6,542.5 1649.5,541.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664.1,530.8 1673.3,532.4 1673.3,545.8 1664.1,544.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1678.6,536.4 1687.7,538.1 1687.7,551.4 1678.6,550.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1692.2,539.3 1701.4,540.9 1701.4,554.2 1692.2,553.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1707.1,544.8 1716.2,546.5 1716.2,559.8 1707.1,558.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1721.3,548.1 1730.5,549.7 1730.5,563.1 1721.3,562.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1733.9,551.4 1743.1,553 1743.1,566.3 1733.9,565.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1649.2,553.4 1658.4,555 1658.4,568.3 1649.2,567.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1663.9,556.6 1673.1,558.2 1673.1,571.5 1663.9,570.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.4,562.2 1687.5,563.8 1687.5,577.2 1678.4,576.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692,565.1 1701.2,566.7 1701.2,580 1692,579 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1706.9,570.6 1716,572.2 1716,585.6 1706.9,584.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1721.1,573.9 1730.3,575.5 1730.3,588.8 1721.1,587.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1733.7,577.2 1742.9,578.8 1742.9,592.1 1733.7,591.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.2,585.1 1658.4,586.8 1658.4,600.1 1649.2,599.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664.3,586.8 1673.5,588.4 1673.5,601.8 1664.3,600.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.6,589.5 1687.7,591.1 1687.7,604.5 1678.6,603.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692.2,592.4 1701.4,594 1701.4,607.3 1692.2,606.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1707.1,597.9 1716.2,599.5 1716.2,612.9 1707.1,611.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1721.3,601.2 1730.5,602.8 1730.5,616.1 1721.3,615.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1733.9,604.5 1743.1,606.1 1743.1,619.4 1733.9,618.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.7,617 1658.8,617.7 1658.8,631.3 1649.7,630.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1663.5,619.6 1672.7,620.4 1672.7,633.9 1663.5,633 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.2,621.3 1687.3,622.1 1687.3,635.6 1678.2,634.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1691.4,623.7 1700.6,624.5 1700.6,638 1691.4,637.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.2,625 1714.4,625.8 1714.4,639.3 1705.2,638.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1719.7,628 1728.8,628.8 1728.8,642.3 1719.7,641.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1732.7,630.2 1741.9,631 1741.9,644.5 1732.7,643.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1649.9,644.2 1659,644.9 1659,658.5 1649.9,657.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1663.7,646.8 1672.9,647.5 1672.9,661.1 1663.7,660.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.4,648.5 1687.5,649.2 1687.5,662.8 1678.4,661.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1691.6,650.9 1700.8,651.6 1700.8,665.2 1691.6,664.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.4,652.2 1714.6,652.9 1714.6,666.5 1705.4,665.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1719.9,655.2 1729.1,655.9 1729.1,669.5 1719.9,668.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1732.9,657.4 1742.1,658.1 1742.1,671.7 1732.9,670.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.5,670.5 1658.6,671.3 1658.6,684.8 1649.5,683.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1663.3,673.2 1672.5,673.9 1672.5,687.4 1663.3,686.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1678,674.8 1687.1,675.6 1687.1,689.1 1678,688.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1691.2,677.2 1700.3,678 1700.3,691.5 1691.2,690.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1705,678.6 1714.2,679.3 1714.2,692.8 1705,692 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1719.5,681.6 1728.6,682.3 1728.6,695.8 1719.5,695 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1732.5,683.7 1741.7,684.5 1741.7,698 1732.5,697.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1650.5,696.2 1659.6,697 1659.6,710.5 1650.5,709.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664.3,698.9 1673.5,699.6 1673.5,713.1 1664.3,712.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1679,700.5 1688.1,701.3 1688.1,714.8 1679,713.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692.2,703 1701.4,703.7 1701.4,717.2 1692.2,716.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1706,704.3 1715.2,705 1715.2,718.5 1706,717.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1720.5,707.3 1729.7,708 1729.7,721.5 1720.5,720.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1733.5,709.4 1742.7,710.2 1742.7,723.7 1733.5,722.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1650.1,725.9 1659.2,726.6 1659.2,740.1 1650.1,739.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1663.9,728.5 1673.1,729.2 1673.1,742.8 1663.9,741.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.6,730.2 1687.7,730.9 1687.7,744.4 1678.6,743.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1691.8,732.6 1701,733.3 1701,746.8 1691.8,746 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.6,733.9 1714.8,734.6 1714.8,748.2 1705.6,747.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1720.1,736.9 1729.3,737.6 1729.3,751.2 1720.1,750.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1733.1,739.1 1742.3,739.8 1742.3,753.3 1733.1,752.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1650.3,754.5 1659.4,755.3 1659.4,768.8 1650.3,767.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1649.5,789.9 1658.6,790.7 1658.6,804.2 1649.5,803.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1662.7,790.4 1671.8,791.2 1671.8,804.7 1662.7,803.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1676.9,791 1686.1,791.8 1686.1,805.3 1676.9,804.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1690.6,793.2 1699.7,794 1699.7,807.5 1690.6,806.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705,794.9 1714.2,795.7 1714.2,809.2 1705,808.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1720.3,794.8 1729.5,795.5 1729.5,809 1720.3,808.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1734.1,796 1743.3,796.7 1743.3,810.2 1734.1,809.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1650.3,820.9 1659.4,821.7 1659.4,835.2 1650.3,834.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1663.3,820.3 1672.5,821 1672.5,834.5 1663.3,833.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1677.3,820.6 1686.5,821.4 1686.5,834.9 1677.3,834 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1691.2,822 1700.3,822.8 1700.3,836.3 1691.2,835.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.4,823.2 1714.6,824 1714.6,837.5 1705.4,836.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1721.1,824.5 1730.3,825.3 1730.3,838.8 1721.1,837.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1734.8,825.8 1743.9,826.5 1743.9,840 1734.8,839.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1650.7,850.1 1659.8,850.8 1659.8,864.4 1650.7,863.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1664.7,851.7 1673.9,852.4 1673.9,866 1664.7,865.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1679,852.7 1688.1,853.4 1688.1,866.9 1679,866.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1665.1,876.3 1674.3,877 1674.3,890.5 1665.1,889.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1690.4,898.3 1699.5,899.1 1699.5,912.6 1690.4,911.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1720.9,851.1 1730.1,851.8 1730.1,865.3 1720.9,864.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1734.8,851.9 1743.9,852.6 1743.9,866.2 1734.8,865.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1664.1,757.1 1673.3,757.9 1673.3,771.4 1664.1,770.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1678.8,758.8 1687.9,759.6 1687.9,773.1 1678.8,772.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1692,761.2 1701.2,762 1701.2,775.5 1692,774.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1705.8,762.5 1715,763.3 1715,776.8 1705.8,775.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1720.3,765.5 1729.5,766.3 1729.5,779.8 1720.3,778.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1733.3,767.7 1742.5,768.5 1742.5,782 1733.3,781.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.1,614.1 882.1,621.3 888.9,619.9 888.9,613.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="871.3,616.5 871.3,623.7 878.1,622.3 878.1,615.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860.2,619.3 860.2,626.5 867,625.2 867,618.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="849.8,622.2 849.8,629.4 856.6,628 856.6,621.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.3,624.6 839.3,631.8 846,630.4 846,623.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829,627.1 829,634.3 835.7,632.9 835.7,626.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="818.8,629.5 818.8,636.7 825.6,635.3 825.6,628.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.5,628.2 882.5,635.4 889.3,634.1 889.3,627.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="871.7,630.6 871.7,637.8 878.5,636.5 878.5,629.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860.6,633.4 860.6,640.7 867.4,639.3 867.4,632.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="850.1,636.3 850.1,643.5 856.9,642.2 856.9,635.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.6,638.7 839.6,645.9 846.4,644.6 846.4,637.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829.3,641.2 829.3,648.4 836.1,647.1 836.1,640.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="819.1,643.6 819.1,650.8 825.9,649.5 825.9,642.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="881.9,641.7 881.9,648.9 888.7,647.5 888.7,640.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="871.2,644 871.2,651.3 878,649.9 878,643.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860,646.9 860,654.1 866.8,652.8 866.8,645.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="849.6,649.7 849.6,657 856.4,655.6 856.4,648.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.1,652.1 839.1,659.4 845.9,658 845.9,651.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="828.8,654.6 828.8,661.9 835.6,660.5 835.6,653.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.6,657 818.6,664.3 825.4,662.9 825.4,656.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.4,656.5 882.2,663.7 889,662.5 889.2,655.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="871.5,658.7 871.4,665.9 878.2,664.7 878.4,657.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860.4,661.4 860.2,668.6 867.1,667.3 867.2,660.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="849.9,664 849.8,671.3 856.6,670 856.7,663.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.3,666.3 839.2,673.5 846,672.2 846.1,665.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829,668.6 828.9,675.8 835.7,674.6 835.8,667.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.8,670.8 818.6,678.1 825.4,676.8 825.6,670 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="881.9,671.1 881.8,678.4 888.6,677.1 888.7,670.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="871.1,673.3 870.9,680.6 877.8,679.3 877.9,672.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="859.9,676 859.8,683.2 866.6,682 866.7,675.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="849.4,678.7 849.3,685.9 856.1,684.7 856.2,677.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="838.9,680.9 838.7,688.1 845.5,686.9 845.7,680 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="828.5,683.2 828.4,690.5 835.2,689.2 835.3,682.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.3,685.5 818.2,692.7 825,691.4 825.1,684.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="818.2,697.9 818.2,704.4 824.4,703.2 824.4,697.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="829,696.5 828.9,702.1 834.8,701.4 834.8,696 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="839.3,694.7 839.2,700 845.1,700 845.1,694 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="849.3,692.7 849.3,698.6 856.4,697.8 856.4,692.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860,690.4 860,696 867.4,695.3 867.2,689.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="870.9,688.7 870.9,694 877.9,694 877.9,688.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.5,686.4 882.5,692.1 889.3,691.6 889.3,685.9 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="818.6"
            y="711.6"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="828.9"
            y="709.8"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="839.7"
            y="707.8"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="850"
            y="706.1"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="860.1"
            y="704.6"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="871.5"
            y="702.4"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="883"
            y="700.7"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="818.8"
            y="725.3"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="829.1"
            y="723.4"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="839.9"
            y="721.5"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="850.2"
            y="719.7"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="860.3"
            y="718.3"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="871.8"
            y="716.1"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="883.2"
            y="714.4"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="818.5"
            y="739.2"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="828.8"
            y="737.4"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="839.6"
            y="735.4"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="849.9"
            y="733.7"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="860"
            y="732.2"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="871.4"
            y="730"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="882.9"
            y="728.3"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="819"
            y="753.1"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="829.3"
            y="751.3"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="840.1"
            y="749.3"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="850.4"
            y="747.6"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="860.5"
            y="746.1"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="871.9"
            y="743.9"
            className="st3"
            width="6.5"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="883.4"
            y="742.2"
            className="st6"
            width="6.5"
            height="5.8"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.8,765.3 824.4,765.3 824.4,771 819,771 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829.1,764.4 834.7,764.4 834.7,770.1 829.3,770.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="839.9,763.2 845.4,763.2 845.4,768.9 840,768.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="850.3,762 855.9,762 855.9,767.7 850.5,767.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="861.2,761 866.8,761 866.8,766.7 861.4,766.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="872.1,759.5 877.6,759.5 877.6,765.2 872.2,765.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.7,758.2 888.3,758.2 888.3,763.9 882.9,763.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="819.2,779.5 824.7,779.5 824.7,785.2 819.3,785.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="829.5,778.6 835,778.6 835,784.3 829.6,784.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="840.2,777.5 845.8,777.5 845.8,783.2 840.4,783.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="850.6,776.2 856.2,776.2 856.2,781.9 850.8,781.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="861.6,775.2 867.1,775.2 867.1,780.9 861.7,780.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="872.4,773.7 878,773.7 878,779.4 872.6,779.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="883.1,772.5 888.6,772.5 888.6,778.2 883.2,778.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="819.4,792.8 825,792.8 825,798.5 819.6,798.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829.7,791.9 835.3,791.9 835.3,797.6 829.9,797.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="840.5,790.7 846,790.7 846,796.4 840.6,796.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="850.9,789.5 856.4,789.5 856.4,795.2 851,795.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="861.8,788.4 867.4,788.4 867.4,794.1 862,794.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="872.7,787 878.2,787 878.2,792.7 872.8,792.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="883.3,785.7 888.9,785.7 888.9,791.4 883.5,791.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.8,806.3 825,806.3 825,811.9 819,811.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="828.9,805.6 835.1,805.6 835.1,811.2 829.1,811.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.7,805.2 845.8,805.2 845.8,810.8 839.9,810.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="850,804.2 856.1,804.2 856.1,809.7 850.2,809.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860.4,803.2 866.5,803.2 866.5,808.8 860.6,808.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="871.6,802.4 877.8,802.4 877.8,808 871.8,808 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="882.9,801.6 889,801.6 889,807.2 883,807.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.9,820 825.1,820 825.1,825.6 819.1,825.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="829,819.3 835.2,819.3 835.2,824.9 829.2,824.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="839.8,818.9 846,818.9 846,824.5 840,824.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="850.1,817.8 856.3,817.8 856.3,823.4 850.3,823.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="860.5,816.9 866.7,816.9 866.7,822.5 860.7,822.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="871.8,816.1 877.9,816.1 877.9,821.7 871.9,821.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="883,815.3 889.1,815.3 889.1,820.9 883.2,820.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.9,834 825.1,834 825.1,839.6 819.1,839.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="829,833.3 835.2,833.3 835.2,838.9 829.2,838.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="839.8,832.9 846,832.9 846,838.5 840,838.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="850.1,831.9 856.3,831.9 856.3,837.4 850.3,837.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="860.5,830.9 866.7,830.9 866.7,836.5 860.7,836.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="871.8,830.1 877.9,830.1 877.9,835.7 871.9,835.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="883,829.3 889.1,829.3 889.1,834.9 883.1,834.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.4,847.5 824.5,847.5 824.5,853.1 818.5,853.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="828.5,846.8 834.6,846.8 834.6,852.4 828.6,852.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="839.2,846.3 845.4,846.3 845.4,851.9 839.4,851.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="849.5,845.3 855.7,845.3 855.7,850.9 849.7,850.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="859.9,844.4 866.1,844.4 866.1,850 860.1,850 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="871.2,843.6 877.3,843.6 877.3,849.2 871.3,849.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.4,842.8 888.6,842.8 888.6,848.4 882.6,848.4 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="828.5"
            y="860"
            className="st3"
            width="6.1"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="839.5"
            y="860.1"
            className="st3"
            width="6.1"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="850.1"
            y="859.9"
            className="st3"
            width="6.1"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="860.7"
            y="859.9"
            className="st6"
            width="6.1"
            height="5.8"
          />
          <rect
            onMouseEnter={handleHover}
            x="871.1"
            y="859.3"
            className="st6"
            width="6.1"
            height="5.8"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="818.4,873.5 818.4,878.4 825.1,878.4 825,873.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="829,874.1 829,879 835.7,879 835.6,874.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="840.1,874.2 840.1,879.1 846.9,879.1 846.8,874.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="849.5,873.8 849.5,878.7 856.2,878.7 856.1,873.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="860.5,873.6 860.5,878.5 867.2,878.5 867.1,873.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="882.8,873.2 882.8,878.1 889.6,878.1 889.4,873.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="899.3,612.6 899.3,619.5 903.5,620.5 903.5,614.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.6,614.5 906.6,621.4 910.8,622.4 910.8,616.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.7,617.5 913.7,624.4 917,625.2 917,618.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="920,620.1 920,627 924.2,628 924.2,621.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.1,622.1 927.1,629 931.3,630 931.3,623.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="934.8,625 934.8,631.9 938.1,632.7 938.1,626.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.2,626.9 941.2,633.7 945.4,634.8 945.4,628.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.4,625.2 898.4,632.1 902.6,633.2 902.6,626.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.6,627.4 906.6,634.3 910.8,635.3 910.8,629 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="912.8,630.2 912.8,637.1 917,638.1 917,631.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.9,633.2 920.9,640.1 925.1,641.1 925.1,634.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="928,635.2 928,642.1 932.2,643.1 932.2,636.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="933.9,637.7 933.9,644.6 938.1,645.6 938.1,639.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940.3,639.5 940.3,646.4 944.5,647.4 944.5,641.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.1,639.4 898.1,646.3 902.3,647.3 902.3,641 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.4,641.4 905.4,648.3 909.6,649.3 909.6,642.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.4,644.6 913.4,651.4 917.6,652.5 917.6,646.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="919.7,647.2 919.7,654 923.9,655.1 923.9,648.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.7,649.2 926.7,656.1 931,657.1 931,650.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="934.5,652.1 934.5,659 938.7,660 938.7,653.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940,653.7 940,660.6 944.2,661.6 944.2,655.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.4,652.8 898.4,659.7 902.6,660.7 902.6,654.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.6,655 906.6,661.8 910.8,662.9 910.8,656.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="912.8,657.7 912.8,664.6 917,665.6 917,659.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.9,660.7 920.9,667.6 925.1,668.6 925.1,662.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.1,662.5 927.1,669.4 931.3,670.5 931.3,664.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="934.8,665.4 934.8,672.3 939,673.3 939,667 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940.3,667.1 940.3,674 944.5,675 944.5,668.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.4,664.7 898.4,671.6 902.6,672.6 902.6,666.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.6,666.9 906.6,673.8 910.8,674.8 910.8,668.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="912.8,669.7 912.8,676.5 917,677.6 917,671.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.9,672.6 920.9,679.5 925.1,680.6 925.1,674.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="928,674.7 928,681.6 932.2,682.6 932.2,676.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="933.9,677.2 933.9,684.1 938.1,685.1 938.1,678.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.2,679.2 941.2,686.1 945.4,687.1 945.4,680.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.4,680.4 903,681.1 903,687.4 898.4,686.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.8,681.9 910.4,682.6 910.4,688.9 905.8,688.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="914,684.7 918.6,685.5 918.6,691.7 914,691.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.9,686 925.5,686.8 925.5,693.1 920.9,692.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.5,688.5 932.1,689.2 932.1,695.5 927.5,695 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.7,690 939.3,690.8 939.3,697 934.7,696.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.9,691.7 946.6,692.5 946.6,698.8 941.9,698.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.4,693.2 903.1,694 903.1,700.2 898.4,699.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.7,694.9 910.5,695.5 910.5,701.7 906.7,701.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="913.1,697.4 917.8,698.1 917.8,704.4 913.1,703.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="920,698.7 924.6,699.5 924.6,705.7 920,705.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="927.9,701.5 932.5,702.3 932.5,708.5 927.9,708.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="935.1,703.1 939.7,703.8 939.7,710.1 935.1,709.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="941.1,704.4 945.7,705.2 945.7,711.4 941.1,711 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.7,707.5 903.4,708.2 903.4,714.5 898.7,714 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.7,708.8 910.4,709.6 910.4,715.8 905.7,715.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.4,711.6 918,712.4 918,718.7 913.4,718.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.3,713 924.9,713.7 924.9,720 920.3,719.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.4,715.4 932,716.2 932,722.4 927.4,722 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.6,716.9 939.2,717.7 939.2,724 934.6,723.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.4,718.7 946,719.4 946,725.7 941.4,725.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.6,719.6 903.2,720.4 903.2,726.6 898.6,726.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.6,720.9 910.2,721.7 910.2,728 905.6,727.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="912.9,723.6 917.5,724.3 917.5,730.6 912.9,730.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.2,725.1 924.8,725.9 924.8,732.1 920.2,731.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.3,727.5 931.9,728.3 931.9,734.5 927.3,734.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="934.9,729.3 939.5,730 939.5,736.3 934.9,735.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940.9,730.6 945.5,731.4 945.5,737.6 940.9,737.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.2,734.3 902.8,735.1 902.8,741.4 898.2,740.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="906.2,735.3 910.9,736.1 910.9,742.4 906.2,741.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="913,736.4 917.6,737.2 917.6,743.4 913,743 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920.3,737.9 924.9,738.7 924.9,745 920.3,744.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="927.4,740.4 932,741.1 932,747.4 927.4,746.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="935,742.1 939.6,742.9 939.6,749.1 935,748.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="941,743.4 945.6,744.2 945.6,750.5 941,750 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.8,749.5 903.5,749.9 903.5,756.2 898.8,755.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.4,750.6 910,750.9 910,757.3 905.4,756.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.2,751.5 917.8,751.9 917.8,758.3 913.2,757.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="919.5,752.5 924.1,752.8 924.1,759.2 919.5,758.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="926.9,753.3 931.5,753.6 931.5,760 926.9,759.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="933.8,754.5 938.4,754.9 938.4,761.2 933.8,760.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="940.8,755.7 945.4,756.1 945.4,762.4 940.8,762 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.5,762.1 903.2,762.4 903.2,768.8 898.5,768.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="905.9,763.5 910.5,763.9 910.5,770.2 905.9,769.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.3,764.3 917.9,764.7 917.9,771 913.3,770.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="920,765.5 924.6,765.8 924.6,772.2 920,771.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.6,765.9 931.2,766.2 931.2,772.6 926.6,772.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="933.9,767.3 938.5,767.6 938.5,774 933.9,773.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="940.7,768.5 945.3,768.9 945.3,775.2 940.7,774.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.3,774.5 903,774.8 903,781.2 898.3,780.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.3,775.7 909.9,776.1 909.9,782.4 905.3,782 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="912.7,776.5 917.3,776.9 917.3,783.2 912.7,782.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="919.4,777.6 924,778 924,784.4 919.4,783.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.4,778.3 931,778.6 931,785 926.4,784.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="933.7,779.7 938.3,780 938.3,786.4 933.7,786 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940.3,780.7 944.9,781.1 944.9,787.4 940.3,787 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.8,786.6 903.5,786.9 903.5,793.3 898.8,792.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.8,787.8 910.5,788.2 910.5,794.5 905.8,794.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="913.2,788.6 917.9,789 917.9,795.3 913.2,794.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="919.9,789.7 924.5,790.1 924.5,796.4 919.9,796 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.9,790.3 931.5,790.7 931.5,797.1 926.9,796.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.2,791.8 938.8,792.1 938.8,798.5 934.2,798.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="940.8,792.8 945.4,793.1 945.4,799.5 940.8,799.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="898.6,800.5 903.3,800.9 903.3,807.2 898.6,806.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="905.6,801.7 910.2,802.1 910.2,808.4 905.6,808 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913,802.5 917.6,802.9 917.6,809.2 913,808.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="919.7,803.7 924.3,804 924.3,810.4 919.7,810 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="926.7,804.3 931.3,804.6 931.3,811 926.7,810.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934,805.7 938.6,806 938.6,812.4 934,812 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="940.6,806.7 945.2,807.1 945.2,813.4 940.6,813 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.7,814 903.4,814.3 903.4,820.7 898.7,820.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.3,830.6 903,831 903,837.3 898.3,836.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="905,830.9 909.6,831.2 909.6,837.6 905,837.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="912.2,831.1 916.8,831.5 916.8,837.9 912.2,837.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="919.1,832.2 923.7,832.5 923.7,838.9 919.1,838.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="926.4,833 931,833.3 931,839.7 926.4,839.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.1,832.9 938.7,833.2 938.7,839.6 934.1,839.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.1,833.5 945.7,833.8 945.7,840.2 941.1,839.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.7,845.2 903.4,845.5 903.4,851.9 898.7,851.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="905.3,844.9 909.9,845.2 909.9,851.6 905.3,851.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="912.4,845.1 917,845.4 917,851.8 912.4,851.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="919.4,845.7 924,846.1 924,852.4 919.4,852 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.6,846.3 931.2,846.6 931.2,853 926.6,852.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="934.5,846.9 939.1,847.2 939.1,853.6 934.5,853.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="941.4,847.5 946,847.8 946,854.2 941.4,853.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="898.9,858.9 903.6,859.3 903.6,865.6 898.9,865.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="906,859.7 910.7,860 910.7,866.4 906,866 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="913.2,860.1 917.9,860.5 917.9,866.8 913.2,866.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="906.2,871.2 910.9,871.6 910.9,877.9 906.2,877.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="919,881.6 923.6,881.9 923.6,888.3 919,887.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.4,859.4 939,859.7 939,866.1 934.4,865.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="941.4,859.8 946,860.1 946,866.5 941.4,866.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="905.7,815.2 910.4,815.6 910.4,821.9 905.7,821.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="913.1,816 917.8,816.4 917.8,822.7 913.1,822.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="919.8,817.1 924.4,817.5 924.4,823.8 919.8,823.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="926.8,817.8 931.4,818.1 931.4,824.5 926.8,824.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="934.1,819.2 938.7,819.5 938.7,825.9 934.1,825.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="940.7,820.2 945.3,820.5 945.3,826.9 940.7,826.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="686.9,560.7 686.9,565.8 731.1,554.1 731.1,549.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="688.4,567.8 688.4,570.9 730,560.7 730,557.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="723.9,565 723.9,656.1 728,656.1 728,564.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="716.8,567.2 716.8,658.3 720.9,658.3 720.9,566.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="709.4,568.8 709.4,659.8 713.4,659.8 713.4,568.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="702.2,570.9 702.2,662 706.3,662 706.3,570.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="694.8,573.5 694.8,664.6 698.9,664.6 698.9,572.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="723.9,664.6 728,663.3 729.3,884 723.9,884 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="710.4,667.7 714.5,666.3 715.7,887.1 710.4,887.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="694.6,671.6 698.6,670.3 699.9,891 694.6,891 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="679.2,674.1 683.3,672.8 684.6,893.5 679.2,893.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="739,549.6 817.4,569.1 817.4,573.4 739,554.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="739,557.4 739,561.1 814.6,578.2 814.6,574.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="742.9,567.8 742.9,577.4 749.5,577.4 749.5,568.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="752.8,570.3 752.8,579.9 759.4,579.9 759.4,570.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="763.3,572.9 763.3,582.5 769.9,582.5 769.9,573.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="772.7,574.7 772.7,584.3 779.4,584.3 779.4,574.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="782.1,576.8 782.1,586.5 788.8,586.5 788.8,577.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="792.1,578.4 792.1,588 799,588 799,578.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="801.3,580.6 801.3,590.2 807.9,590.2 807.9,580.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="742.6,585.8 742.6,595.4 749.2,595.4 749.2,586 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="752.5,588.2 752.5,597.8 759.1,597.8 759.1,588.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="762.7,590.8 762.7,600.5 769.7,600.5 769.7,591.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="772.2,592.6 772.2,602.2 778.8,602.2 778.8,592.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="782.2,594.8 782.2,604.4 788.8,604.4 788.8,595 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="791.8,596.3 791.8,606 798.5,606 798.5,596.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="801.3,598.5 801.3,608.1 808,608.1 808,598.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="741.8,605.1 741.8,614.7 748.4,614.7 748.4,605.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="742,626 742,635.7 748.7,635.7 748.7,626.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="753,626.3 753,635.9 759.7,635.9 759.7,626.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="763.7,628.1 763.7,637.7 770.4,637.7 770.4,628.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="773.2,629.9 773.2,639.5 779.8,639.5 779.8,630.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="783.1,631.8 783.1,641.4 789.8,641.4 789.8,632.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="793.4,632.7 793.4,642.3 800,642.3 800,632.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="802,635.5 802,645.1 808.7,645.1 808.7,635.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="741.8,646.2 741.8,655.9 748.4,655.9 748.4,646.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="752.8,646.5 752.8,656.1 759.4,656.1 759.4,646.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="763.5,648.3 763.5,657.9 770.1,657.9 770.1,648.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="772.9,650.1 772.9,659.7 779.6,659.7 779.6,650.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="782.9,652 782.9,661.6 789.5,661.6 789.5,652.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="792.9,652.9 792.9,662.5 799.5,662.5 799.5,653.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="801.8,655.7 801.8,665.3 808.4,665.3 808.4,655.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="741.5,663.7 741.5,673.3 748.2,673.3 748.2,664 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="752.5,664 752.5,673.6 759.1,673.6 759.1,664.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="763.2,665.7 763.2,675.4 769.9,675.4 769.9,666 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="772.7,667.5 772.7,677.2 779.3,677.2 779.3,667.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="782.6,669.5 782.6,679.1 789.3,679.1 789.3,669.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="792.6,670.3 792.6,680 799.2,680 799.2,670.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="801.5,673.1 801.5,682.7 808.2,682.7 808.2,673.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="741.8,682.7 741.8,692.3 748.4,692.3 748.4,683 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="752.8,683 752.8,692.6 759.4,692.6 759.4,683.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="763.5,684.7 763.5,694.4 770.1,694.4 770.1,685 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="772.9,686.5 772.9,696.2 779.6,696.2 779.6,686.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="782.9,688.5 782.9,698.1 789.5,698.1 789.5,688.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="792.9,689.4 792.9,699 799.5,699 799.5,689.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="801.8,692.1 801.8,701.7 808.4,701.7 808.4,692.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="740.5,700.8 740.5,710.4 747.1,710.4 747.1,701 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="751.5,701 751.5,710.6 758.1,710.6 758.1,701.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="762.2,702.8 762.2,712.4 768.9,712.4 768.9,703 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="771.7,704.6 771.7,714.2 778.3,714.2 778.3,704.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="781.6,706.5 781.6,716.2 788.3,716.2 788.3,706.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="791.6,707.4 791.6,717 798.2,717 798.2,707.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="800.5,710.2 800.5,719.8 807.1,719.8 807.1,710.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="741.5,719.7 741.5,729.3 748.2,729.3 748.2,719.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="752.5,719.9 752.5,729.5 759.1,729.5 759.1,720.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="763.2,721.7 763.2,731.3 769.9,731.3 769.9,722 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="772.7,723.5 772.7,733.1 779.3,733.1 779.3,723.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="782.6,725.5 782.6,735.1 789.3,735.1 789.3,725.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="792.6,726.3 792.6,735.9 799.2,735.9 799.2,726.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="801.5,729.1 801.5,738.7 808.2,738.7 808.2,729.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="752.3,607.5 752.3,617.2 758.9,617.2 758.9,607.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="762.5,610.2 762.5,619.8 769.2,619.8 769.2,610.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="772,612 772,621.6 778.6,621.6 778.6,612.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="781.4,614.1 781.4,623.7 788,623.7 788,614.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="791.6,615.7 791.6,625.3 798.3,625.3 798.3,615.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="800.5,617.9 800.5,627.5 807.1,627.5 807.1,618.1 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="742.7"
            y="739.9"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.7"
            y="740.8"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="763.2"
            y="742"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.3"
            y="742.8"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="782.4"
            y="743.9"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="791.8"
            y="745.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.2"
            y="746.2"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="742.8"
            y="758.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.8"
            y="759.3"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="763.3"
            y="760.5"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.4"
            y="761.3"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="782.5"
            y="762.5"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="792"
            y="763.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.3"
            y="764.8"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="742.8"
            y="777"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="743.1"
            y="797.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.1"
            y="797.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="763.4"
            y="797.6"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.6"
            y="798.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="783"
            y="799"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="792.8"
            y="799.7"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.7"
            y="800.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="742.6"
            y="815.6"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="752.6"
            y="815.6"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="762.9"
            y="816.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.1"
            y="816.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="782.4"
            y="817.5"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="792.3"
            y="818.2"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.2"
            y="818.6"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="741.9"
            y="835"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="751.8"
            y="835.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="762.1"
            y="835.5"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="772.4"
            y="836.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="781.7"
            y="837"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="791.5"
            y="837.7"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="801.5"
            y="838.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="743.3"
            y="853.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.2"
            y="853.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="763.6"
            y="853.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.8"
            y="854.7"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="783.1"
            y="855.3"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="792.9"
            y="856"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.9"
            y="856.4"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="743.8"
            y="871.8"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.7"
            y="871.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="764.1"
            y="872.3"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="774.3"
            y="873.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="783.6"
            y="873.8"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="793.4"
            y="874.5"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="803.4"
            y="874.9"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="753.8"
            y="777.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="763.3"
            y="779.1"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="773.4"
            y="779.9"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="782.5"
            y="781"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="792"
            y="782.4"
            className="st6"
            width="5.9"
            height="8.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="802.3"
            y="783.3"
            className="st3"
            width="5.9"
            height="8.6"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="762.5,892.3 762.5,900.2 769.4,900.6 769.4,892.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="773.8,892.8 773.8,900.7 780.6,901.1 780.6,893.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="783.5,893.1 783.5,901 790.3,901.4 790.3,893.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="800.1,892.9 800.1,900.8 807,901.2 807,893.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="17.6,388.5 23.7,388.5 23.7,482.2 17.6,481.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="17.6,493.1 24.4,493.1 25.4,810.5 17.6,810.5 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.3"
            y="394.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="43.7"
            y="397.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="52.3"
            y="400.3"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="61.5"
            y="402.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="69.9"
            y="405.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="78.9"
            y="408.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="33.8"
            y="414.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="43.1"
            y="417"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="51.8"
            y="420.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="61"
            y="422.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="69.4"
            y="425.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="78.4"
            y="428.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.9"
            y="433"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.3"
            y="435.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="52.9"
            y="438.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="62.1"
            y="441"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="70.5"
            y="443.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="79.5"
            y="446.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="35"
            y="451.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.3"
            y="454.2"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="53"
            y="457.3"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="62.2"
            y="459.8"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="70.6"
            y="462.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="79.6"
            y="465.7"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.9"
            y="469.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.3"
            y="492.7"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="45.4"
            y="494.2"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="54.7"
            y="496.8"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="64.3"
            y="499.1"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="74"
            y="500.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="83.1"
            y="503.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="93.1"
            y="504.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.5"
            y="509.8"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="45.5"
            y="511.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="54.9"
            y="513.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="64.5"
            y="516.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="74.2"
            y="517.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="83.2"
            y="520.3"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="93.3"
            y="521.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="33.7"
            y="529.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.8"
            y="531.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="54.1"
            y="534"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="63.7"
            y="536.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="73.4"
            y="538"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="82.5"
            y="540.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="92.5"
            y="541.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="33.2"
            y="547.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.3"
            y="548.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="53.6"
            y="551.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="63.2"
            y="553.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="72.9"
            y="555.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="82"
            y="557.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="92"
            y="559.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="32.6"
            y="567.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="43.7"
            y="568.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="53"
            y="571.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="62.6"
            y="573.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="72.3"
            y="575.3"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="81.4"
            y="577.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="91.4"
            y="579.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="32.7"
            y="586.2"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="43.7"
            y="587.7"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="53.1"
            y="590.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="62.7"
            y="592.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="72.4"
            y="594.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="81.4"
            y="596.7"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="91.5"
            y="598.1"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="33.7"
            y="605.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.8"
            y="607"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="54.1"
            y="609.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="63.7"
            y="611.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="73.4"
            y="613.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="82.5"
            y="615.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="92.5"
            y="617.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.9"
            y="623.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="46"
            y="624.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="55.3"
            y="627.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="64.9"
            y="629.7"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="74.6"
            y="631.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="83.7"
            y="633.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="93.7"
            y="635.2"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="34.7"
            y="641.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="45.8"
            y="643.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="55.1"
            y="646"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="64.8"
            y="648.3"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="74.5"
            y="650"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="83.5"
            y="652.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="93.5"
            y="653.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="35.2"
            y="660.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="46.3"
            y="662"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="55.7"
            y="664.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="65.3"
            y="666.8"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75"
            y="668.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84"
            y="670.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94"
            y="672.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="36.1"
            y="678.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47.1"
            y="679.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.5"
            y="682.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66.1"
            y="684.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75.8"
            y="686.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84.9"
            y="688.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94.9"
            y="690.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="35.9"
            y="697"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47"
            y="698.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.3"
            y="701.1"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66"
            y="703.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75.7"
            y="705.1"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84.7"
            y="707.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94.7"
            y="708.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="36.1"
            y="715.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47.1"
            y="717.1"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.5"
            y="719.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66.1"
            y="721.9"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75.8"
            y="723.6"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84.9"
            y="726"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94.9"
            y="727.5"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="36.3"
            y="735.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47.3"
            y="737.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.7"
            y="739.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66.3"
            y="742"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="76"
            y="743.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="85"
            y="746.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="95.1"
            y="747.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="36.4"
            y="753.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47.5"
            y="754.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.9"
            y="757.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66.5"
            y="759.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="76.2"
            y="761.2"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="85.2"
            y="763.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="95.2"
            y="765"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="35.7"
            y="770.6"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="46.8"
            y="772.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.2"
            y="774.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="65.8"
            y="777"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75.5"
            y="778.7"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84.5"
            y="781.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94.6"
            y="782.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="36.1"
            y="790"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="47.1"
            y="791.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="56.5"
            y="794.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="66.1"
            y="796.4"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="75.8"
            y="798.1"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="84.9"
            y="800.5"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="94.9"
            y="801.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="44.3"
            y="471.8"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="52.9"
            y="474.8"
            className="st6"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="62.1"
            y="477.4"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="70.5"
            y="479.9"
            className="st3"
            width="6"
            height="10"
          />
          <rect
            onMouseEnter={handleHover}
            x="79.5"
            y="483.3"
            className="st3"
            width="6"
            height="10"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="977.6,548.8 981.9,548.8 981.9,616.5 978.5,616.5 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="988"
            y="546.6"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="998"
            y="544.3"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1009"
            y="543.3"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1017.7"
            y="545.4"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1024.4"
            y="548"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1031.4"
            y="551.6"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1038.9"
            y="553.4"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <rect
            onMouseEnter={handleHover}
            x="1046.5"
            y="555.3"
            className="st3"
            width="3.4"
            height="65.6"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="960.9,628 965.2,628 965.3,863.5 961.5,863.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="970.8,624.7 975.1,624.7 975.3,860.2 971.4,860.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="981,621.8 985.4,621.8 985.5,857.2 981.7,857.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="990.9,619.8 995.2,619.8 995.3,855.3 991.5,855.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1002.2,616.8 1006.6,616.8 1006.7,852.2 1002.9,852.2 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.4"
            y="616.8"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.4"
            y="617.8"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.1"
            y="620.8"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.7"
            y="622.2"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.3"
            y="624.3"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048"
            y="624.8"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.8"
            y="626.2"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.3"
            y="629.7"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.3"
            y="630.7"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027"
            y="633.8"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.6"
            y="635.2"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.1"
            y="637.3"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.9"
            y="637.8"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.7"
            y="639.2"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.6"
            y="642.7"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.6"
            y="643.7"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.2"
            y="646.8"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.9"
            y="648.2"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.4"
            y="650.3"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048.2"
            y="650.8"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1056"
            y="652.2"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.8"
            y="657"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.8"
            y="658"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.5"
            y="661"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1034.1"
            y="662.4"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.6"
            y="664.5"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048.4"
            y="665"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1056.2"
            y="666.4"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1013"
            y="668.6"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1020"
            y="669.6"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.7"
            y="672.6"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1034.3"
            y="674"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.8"
            y="676.1"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048.6"
            y="676.6"
            className="st6"
            width="3.7"
            height="7.3"
          />
          <rect
            onMouseEnter={handleHover}
            x="1056.4"
            y="678"
            className="st3"
            width="3.7"
            height="7.3"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1011.7,685.3 1016.3,685.1 1016.3,692 1011.7,692 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1019.3,686.8 1023.9,686.5 1023.9,693.4 1019.3,693.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1026.9,687.4 1031.4,687.2 1031.4,694.1 1026.9,694.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1033.6,688.4 1038.2,688.1 1038.2,695 1033.6,695 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1040.6,689.8 1045.2,689.5 1045.2,696.4 1040.6,696.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1047,690.7 1051.6,690.5 1051.6,697.4 1047,697.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1055.4,691.6 1060,691.4 1060,698.3 1055.4,698.3 	"
          />
          <path className="st3" d="M1014.7,687.7" />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1011.1,698.4 1015.6,698.1 1015.6,705 1011.1,705 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1018.6,699.8 1023.2,699.6 1023.2,706.5 1018.6,706.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1026.2,700.5 1030.8,700.2 1030.8,707.1 1026.2,707.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1033,701.4 1037.6,701.2 1037.6,708.1 1033,708.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1040,702.8 1044.6,702.6 1044.6,709.5 1040,709.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1046.4,703.8 1051,703.5 1051,710.4 1046.4,710.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1054.8,704.7 1059.4,704.4 1059.4,711.3 1054.8,711.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1010.6,713.2 1015.2,712.9 1015.2,719.8 1010.6,719.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1018.2,714.6 1022.8,714.4 1022.8,721.3 1018.2,721.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1025.8,715.3 1030.4,715 1030.4,721.9 1025.8,721.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1032.6,716.2 1037.2,716 1037.2,722.9 1032.6,722.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1039.6,717.6 1044.2,717.4 1044.2,724.3 1039.6,724.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1046,718.6 1050.6,718.3 1050.6,725.2 1046,725.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1054.4,719.5 1059,719.2 1059,726.1 1054.4,726.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1010.7,725.5 1015.3,725.3 1015.3,732.2 1010.7,732.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1018.3,727 1022.9,726.7 1022.9,733.6 1018.3,733.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1025.9,727.6 1030.5,727.4 1030.5,734.3 1025.9,734.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1032.7,728.6 1037.3,728.3 1037.3,735.2 1032.7,735.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1039.7,730 1044.3,729.7 1044.3,736.6 1039.7,736.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1046.1,730.9 1050.7,730.7 1050.7,737.6 1046.1,737.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1054.5,731.8 1059.1,731.6 1059.1,738.5 1054.5,738.5 	"
          />
          <path className="st3" d="M1014.1,700.8" />
          <rect
            onMouseEnter={handleHover}
            x="1011.7"
            y="739.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1018.9"
            y="740.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026"
            y="741.3"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.6"
            y="741.9"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.4"
            y="742.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.5"
            y="742.9"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.1"
            y="743.3"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1011.7"
            y="753.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019"
            y="754.2"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026.1"
            y="755.2"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.6"
            y="755.8"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.5"
            y="756.4"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.5"
            y="756.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.1"
            y="757.2"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1011.5"
            y="766.9"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1018.7"
            y="767.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1025.8"
            y="768.7"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.4"
            y="769.3"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.3"
            y="769.9"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.3"
            y="770.3"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1054.9"
            y="770.7"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1011.7"
            y="780.3"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1018.9"
            y="781.1"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026"
            y="782.1"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.6"
            y="782.7"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.5"
            y="783.3"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.5"
            y="783.7"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.1"
            y="784.1"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.8"
            y="793.2"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1020"
            y="794.1"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.1"
            y="795"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1034.7"
            y="795.6"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1041.5"
            y="796.2"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048.6"
            y="796.6"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1056.2"
            y="797"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.8"
            y="806.7"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1020"
            y="807.5"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1027.1"
            y="808.4"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1034.7"
            y="809"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1041.5"
            y="809.6"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1048.6"
            y="810.1"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1056.2"
            y="810.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1011.8"
            y="819.7"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019"
            y="820.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026.1"
            y="821.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.7"
            y="822.1"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.6"
            y="822.7"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.6"
            y="823.1"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.2"
            y="823.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1011.8"
            y="834"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019"
            y="834.8"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026.1"
            y="835.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.7"
            y="836.4"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.6"
            y="837"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.6"
            y="837.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.2"
            y="837.8"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012"
            y="848"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1012.1"
            y="862.9"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1020.1"
            y="863.5"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.9"
            y="875.6"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047"
            y="863.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.4"
            y="863.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1019.2"
            y="848.9"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1026.3"
            y="849.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1033.9"
            y="850.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1040.7"
            y="851"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1047.8"
            y="851.4"
            className="st3"
            width="5.2"
            height="6.9"
          />
          <rect
            onMouseEnter={handleHover}
            x="1055.4"
            y="851.8"
            className="st6"
            width="5.2"
            height="6.9"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1075,398.1 1075,402.5 1165.6,380.8 1165.6,377.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1074.2,404.5 1074.2,408.8 1164.9,387.1 1164.9,383.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1172.3,377.2 1172.3,380.5 1223.8,394.8 1223.8,391.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1172,382.9 1172,386.3 1223.6,400.6 1223.6,397 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1174.3,391.8 1175.6,497.4 1179.9,497.4 1178.4,391.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1184.3,393.5 1185.5,499.2 1189.9,499.2 1188.3,393.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1194,396.3 1195.2,502 1199.6,502 1198,396.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1202.1,399.4 1203.4,505.1 1207.7,505.1 1206.2,399.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1210.8,401.2 1212.1,506.9 1216.4,506.9 1214.9,401.2 	"
          />
          <rect
            onMouseEnter={handleHover}
            x="1084.4"
            y="412.4"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1096.2"
            y="409.9"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1106.9"
            y="407.8"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1118.4"
            y="405.8"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1129.6"
            y="404"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1141.1"
            y="399.4"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1151.6"
            y="398.9"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1084.8"
            y="431.8"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1096.6"
            y="429.3"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1107.3"
            y="427.2"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1118.8"
            y="425.2"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1130"
            y="423.4"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1141.5"
            y="418.8"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1152"
            y="418.3"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1085.3"
            y="453.3"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1097.1"
            y="450.7"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1107.8"
            y="448.7"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1119.3"
            y="446.6"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1130.5"
            y="444.9"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1142"
            y="440.3"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1152.5"
            y="439.7"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1086.1"
            y="475.8"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1097.8"
            y="473.2"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1108.6"
            y="471.2"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1120"
            y="469.2"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1131.3"
            y="467.4"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1142.8"
            y="462.8"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1153.2"
            y="462.3"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1085.6"
            y="498.3"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1097.3"
            y="495.7"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1108"
            y="493.7"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1119.5"
            y="491.6"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1130.8"
            y="489.8"
            className="st6"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1142.3"
            y="485.2"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <rect
            onMouseEnter={handleHover}
            x="1152.7"
            y="484.7"
            className="st3"
            width="7.9"
            height="10.5"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1085.6,517.2 1160.6,503.5 1160.6,506.9 1085.6,521.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1085.3,525.6 1160.4,511.9 1160.4,515.3 1085.3,530.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1166.4,503 1166.4,506.9 1243,525.3 1243,521.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1166.6,509.7 1166.6,513.7 1243.2,532 1243.2,527.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1085.6,538.2 1085.3,546.5 1091.6,546.6 1091.6,538.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1095.4,537.2 1095.1,545.5 1101.4,545.6 1101.4,537.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1107.4,535.4 1107.1,543.7 1113.4,543.8 1113.4,535.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1119.9,534.1 1119.7,542.3 1125.9,542.5 1125.9,534.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1131.7,533 1131.4,541.2 1137.7,541.3 1137.7,533 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1141,531.4 1140.7,539.7 1147,539.8 1147,531.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1150.6,530.4 1150.3,538.6 1156.6,538.8 1156.6,530.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1085.1,558.2 1084.9,566.4 1091.1,566.5 1091.1,558.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1095,557.2 1094.7,565.4 1101,565.5 1101,557.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1107,555.4 1106.7,563.7 1113,563.8 1113,555.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1119.5,554 1119.2,562.3 1125.5,562.4 1125.5,554 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1131.2,552.9 1131,561.2 1137.2,561.3 1137.2,552.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1140.5,551.4 1140.3,559.7 1146.5,559.8 1146.5,551.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1150.1,550.3 1149.9,558.6 1156.1,558.7 1156.1,550.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1085.3,581.1 1085,589.4 1091.3,589.5 1091.3,581.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1095.1,580.1 1094.8,588.4 1101.1,588.5 1101.1,580.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1107.1,578.4 1106.8,586.7 1113.1,586.8 1113.1,578.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1119.6,577 1119.3,585.3 1125.6,585.4 1125.6,577 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1131.3,575.9 1131.1,584.2 1137.3,584.3 1137.3,575.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1140.7,574.4 1140.4,582.6 1146.7,582.8 1146.7,574.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1150.2,573.3 1150,581.6 1156.2,581.7 1156.2,573.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1086.1,603.1 1085.9,611.4 1092.1,611.5 1092.1,603.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1096,602.1 1095.7,610.4 1102,610.5 1102,602.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1108,600.3 1107.7,608.6 1114,608.7 1114,600.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1120.5,599 1120.2,607.2 1126.5,607.3 1126.5,599 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1132.2,597.9 1132,606.1 1138.2,606.2 1138.2,597.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1141.6,596.3 1141.3,604.6 1147.6,604.7 1147.6,596.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1151.1,595.3 1150.9,603.5 1157.1,603.7 1157.1,595.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1086.8,622.6 1086.5,630.8 1092.8,630.9 1092.8,622.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1096.6,621.6 1096.4,629.8 1102.6,629.9 1102.6,621.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1108.6,619.8 1108.4,628.1 1114.6,628.2 1114.6,619.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1121.1,618.4 1120.9,626.7 1127.1,626.8 1127.1,618.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1132.9,617.3 1132.6,625.6 1138.9,625.7 1138.9,617.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1142.2,615.8 1141.9,624.1 1148.2,624.2 1148.2,615.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1151.8,614.7 1151.5,623 1157.8,623.1 1157.8,614.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1086.5,644.3 1086.3,652.6 1092.5,652.7 1092.5,644.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1096.4,643.3 1096.1,651.6 1102.4,651.7 1102.4,643.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1108.4,641.6 1108.1,649.8 1114.4,650 1114.4,641.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1120.9,640.2 1120.6,648.5 1126.9,648.6 1126.9,640.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1132.6,639.1 1132.4,647.3 1138.6,647.5 1138.6,639.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1141.9,637.5 1141.7,645.8 1147.9,645.9 1147.9,637.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1151.5,636.5 1151.3,644.8 1157.5,644.9 1157.5,636.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1086,664.6 1085.8,672.8 1092,672.9 1092,664.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1095.9,663.6 1095.6,671.8 1101.9,671.9 1101.9,663.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1107.9,661.8 1107.6,670.1 1113.9,670.2 1113.9,661.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1120.4,660.4 1120.1,668.7 1126.4,668.8 1126.4,660.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1132.1,659.3 1131.9,667.6 1138.1,667.7 1138.1,659.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1141.4,657.8 1141.2,666.1 1147.4,666.2 1147.4,657.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1151,656.7 1150.7,665 1157,665.1 1157,656.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1087.4,684.5 1087.1,692.8 1093.4,692.9 1093.4,684.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1097.2,683.5 1096.9,691.8 1103.2,691.9 1103.2,683.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1109.2,681.8 1108.9,690.1 1115.2,690.2 1115.2,681.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1121.7,680.4 1121.4,688.7 1127.7,688.8 1127.7,680.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1133.4,679.3 1133.2,687.6 1139.4,687.7 1139.4,679.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1142.8,677.8 1142.5,686 1148.8,686.1 1148.8,677.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1152.3,676.7 1152.1,685 1158.3,685.1 1158.3,676.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1085.6,709.9 1085.3,718.1 1091.6,718.2 1091.6,709.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1095.4,708.9 1095.1,717.1 1101.4,717.2 1101.4,708.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1107.4,707.1 1107.1,715.4 1113.4,715.5 1113.4,707.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1119.9,705.7 1119.7,714 1125.9,714.1 1125.9,705.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1131.7,704.6 1131.4,712.9 1137.7,713 1137.7,704.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1141,703.1 1140.7,711.4 1147,711.5 1147,703.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1150.6,702 1150.3,710.3 1156.6,710.4 1156.6,702 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1087.2,730.4 1086.9,738.7 1093.2,738.8 1093.2,730.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1097,729.4 1096.7,737.7 1103,737.8 1103,729.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1109,727.7 1108.7,735.9 1115,736.1 1115,727.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1121.5,726.3 1121.3,734.6 1127.5,734.7 1127.5,726.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1133.3,725.2 1133,733.4 1139.3,733.6 1139.3,725.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1142.6,723.6 1142.3,731.9 1148.6,732 1148.6,723.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1152.1,722.6 1151.9,730.9 1158.1,731 1158.1,722.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1086.7,751.2 1086.4,759.5 1092.7,759.6 1092.7,751.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1096.5,750.2 1096.2,758.5 1102.5,758.6 1102.5,750.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1108.5,748.4 1108.2,756.7 1114.5,756.8 1114.5,748.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1121,747 1120.7,755.3 1127,755.4 1127,747 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1132.7,745.9 1132.5,754.2 1138.7,754.3 1138.7,745.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1142.1,744.4 1141.8,752.7 1148.1,752.8 1148.1,744.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1151.6,743.4 1151.4,751.6 1157.6,751.7 1157.6,743.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1087.4,771 1087.2,779.2 1093.4,779.3 1093.4,771 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1097.3,770 1097,778.2 1103.3,778.3 1103.3,770 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1109.3,768.2 1109,776.5 1115.3,776.6 1115.3,768.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1121.8,766.8 1121.5,775.1 1127.8,775.2 1127.8,766.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1133.5,765.7 1133.3,774 1139.5,774.1 1139.5,765.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1142.8,764.2 1142.6,772.5 1148.8,772.6 1148.8,764.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1152.4,763.1 1152.1,771.4 1158.4,771.5 1158.4,763.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1088.5,792.9 1088.3,801.2 1094.5,801.3 1094.5,792.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1098.3,791.9 1098.1,800.2 1104.3,800.3 1104.3,791.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1110.3,790.2 1110.1,798.4 1116.3,798.6 1116.3,790.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1122.9,788.8 1122.6,797.1 1128.9,797.2 1128.9,788.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1134.6,787.7 1134.3,796 1140.6,796.1 1140.6,787.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1139.7,811.8 1139.4,820.1 1145.7,820.2 1145.7,811.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1119.7,829.8 1119.5,838.1 1125.7,838.2 1125.7,829.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1098.3,842.7 1098.1,851 1104.3,851.1 1104.3,842.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1131.5,848.2 1131.2,856.4 1137.5,856.5 1137.5,848.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1154.8,845.6 1154.5,853.9 1160.8,854 1160.8,845.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1143.9,786.2 1143.7,794.4 1149.9,794.5 1149.9,786.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1153.5,785.1 1153.2,793.4 1159.5,793.5 1159.5,785.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1172.3,521.5 1172.3,531 1176.6,531 1176.6,521.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.2,522.1 1181.2,531.6 1185.5,531.6 1185.5,522.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193.7,525.3 1193.7,534.8 1198,534.8 1198,525.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.6,527.3 1200.6,536.7 1204.9,536.7 1204.9,527.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.4,529.9 1213.4,539.3 1217.7,539.3 1217.7,530.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1224.3,532.2 1224.3,541.6 1228.7,541.6 1228.7,532.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.3,533.9 1232.3,543.3 1236.6,543.3 1236.6,534.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1170.1,537.6 1170.1,547 1174.4,547 1174.4,537.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.3,538.8 1181.3,548.3 1185.7,548.3 1185.7,539 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193.8,542 1193.8,551.4 1198.2,551.4 1198.2,542.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.7,544 1200.7,553.4 1205.1,553.4 1205.1,544.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.5,546.6 1213.5,556 1217.8,556 1217.8,546.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1222.2,548.2 1222.2,557.7 1226.5,557.7 1226.5,548.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.4,550.5 1232.4,560 1236.7,560 1236.7,550.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1172.8,556.3 1172.8,565.7 1174.8,565.1 1174.8,555.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1184,557.5 1184,566.9 1186,566.3 1186,557.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1191.9,559.5 1191.9,568.9 1196.3,568.9 1196.3,559.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1201.1,562 1201.1,571.5 1205.4,571.5 1205.4,562.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.9,564.7 1213.9,574.1 1218.2,574.1 1218.2,564.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1224.9,566.9 1224.9,576.4 1229.2,576.4 1229.2,567.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.8,568.6 1232.8,578 1237.1,578 1237.1,568.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1170,572.7 1170,582.1 1174.3,582.1 1174.3,572.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.2,573.9 1181.2,583.3 1185.5,583.3 1185.5,574.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1191.4,576.5 1191.4,585.9 1198,586.5 1198,577.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.6,579 1200.6,588.5 1204.9,588.5 1204.9,579.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.4,581.6 1213.4,591.1 1217.7,591.1 1217.7,581.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1222,583.3 1222,592.7 1228.7,593.3 1228.7,584.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.3,585.6 1232.3,595 1236.6,595 1236.6,585.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1171.6,594.5 1171.6,603.9 1176,603.9 1176,594.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1180.6,595.1 1180.6,604.5 1184.9,604.5 1184.9,595.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193.1,598.3 1193.1,607.7 1197.4,607.7 1197.4,598.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200,600.2 1200,609.7 1204.3,609.7 1204.3,600.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1212.7,602.8 1212.7,612.3 1217.1,612.3 1217.1,603 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1221.4,604.5 1221.4,613.9 1225.7,613.9 1225.7,604.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1233.9,607.4 1233.9,616.8 1238.3,616.8 1238.3,607.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1170,614.8 1170,624.2 1174.3,624.2 1174.3,615 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1183.5,616.6 1183.5,626 1187.8,626 1187.8,616.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1191.4,618.6 1191.4,628 1195.7,628 1195.7,618.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1202.9,621.8 1202.9,631.2 1207.2,631.2 1207.2,622 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1211.1,623.2 1211.1,632.6 1215.4,632.6 1215.4,623.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1224.3,626 1224.3,635.5 1228.7,635.5 1228.7,626.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.3,627.7 1232.3,637.2 1236.6,637.2 1236.6,627.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1172.1,635.4 1172.1,644.8 1176.5,644.8 1176.5,635.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.1,636 1181.1,645.5 1185.4,645.5 1185.4,636.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193.6,639.2 1193.6,648.6 1197.9,648.6 1197.9,639.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.5,641.2 1200.5,650.6 1204.8,650.6 1204.8,641.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.2,643.8 1213.2,653.2 1217.6,653.2 1217.6,644 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1221.9,645.4 1221.9,654.9 1226.3,654.9 1226.3,645.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1232.1,647.7 1232.1,657.2 1238.8,657.8 1238.8,648.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1169.3,651.6 1169.3,661.1 1173.7,661.1 1173.7,651.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1182.9,653.4 1182.9,662.9 1187.2,662.9 1187.2,653.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1190.8,655.4 1190.8,664.9 1195.1,664.9 1195.1,655.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1202.3,658.6 1202.3,668 1206.6,668 1206.6,658.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1210.4,660 1210.4,669.4 1214.8,669.4 1214.8,660.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1223.7,662.9 1223.7,672.3 1228,672.3 1228,663.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1231.6,664.6 1231.6,674 1236,674 1236,664.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1172,673 1172,682.4 1176.3,682.4 1176.3,673.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1180.9,673.6 1180.9,683 1185.3,683 1185.3,673.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193.4,676.8 1193.4,686.2 1197.8,686.2 1197.8,677 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.3,678.7 1200.3,688.2 1204.7,688.2 1204.7,678.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1213.1,681.3 1213.1,690.8 1217.4,690.8 1217.4,681.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1221.8,683 1221.8,692.4 1226.1,692.4 1226.1,683.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1234.3,685.9 1234.3,695.3 1238.6,695.3 1238.6,686.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1168.9,690.9 1168.9,700.4 1173.3,700.4 1173.3,691.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1182.5,692.8 1182.5,702.2 1186.8,702.2 1186.8,693 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1190.4,694.7 1190.4,704.2 1194.7,704.2 1194.7,694.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1201.9,697.9 1201.9,707.3 1206.2,707.3 1206.2,698.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1210,699.3 1210,708.8 1214.4,708.8 1214.4,699.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1221,701.6 1221,711 1227.7,711.6 1227.7,702.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1231.2,703.9 1231.2,713.3 1235.6,713.3 1235.6,704.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1171.1,710.8 1171.1,720.2 1175.4,720.2 1175.4,711 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1180,711.4 1180,720.8 1184.4,720.8 1184.4,711.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1192.6,714.6 1192.6,724 1196.9,724 1196.9,714.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1199.4,716.6 1199.4,726 1203.8,726 1203.8,716.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1209.9,718.6 1209.9,728 1216,728 1216,718.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1220.9,720.8 1220.9,730.3 1225.2,730.3 1225.2,721 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1232.8,723.1 1232.8,732.5 1235.4,732.5 1235.4,723.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1169.8,727.2 1169.8,736.6 1174.2,736.6 1174.2,727.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1182.8,728.4 1182.8,737.8 1187.1,737.8 1187.1,728.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1191.3,731 1191.3,740.4 1195.6,740.4 1195.6,731.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1202.2,733.5 1202.2,743 1206.5,743 1206.5,733.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1210.9,735.5 1210.9,745 1215.3,745 1215.3,735.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1223.6,737.8 1223.6,747.2 1228,747.2 1228,738 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.1,740.1 1232.1,749.5 1236.5,749.5 1236.5,740.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1171.5,743.3 1171.5,752.7 1175.9,752.7 1175.9,743.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.1,744.5 1181.1,753.9 1185.4,753.9 1185.4,744.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1193,747.1 1193,756.5 1197.3,756.5 1197.3,747.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.5,749.6 1200.5,759.1 1204.8,759.1 1204.8,749.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1212.6,751.6 1212.6,761.1 1217,761.1 1217,751.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1221.9,753.9 1221.9,763.3 1226.3,763.3 1226.3,754.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1233.8,756.2 1233.8,765.6 1236.5,765.6 1236.5,756.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1170.1,764.5 1170.1,774 1174.4,774 1174.4,764.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1181.9,765.7 1181.9,775.2 1186.3,775.2 1186.3,765.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1191.5,768.3 1191.5,777.8 1195.9,777.8 1195.9,768.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1201.3,770.9 1201.3,780.3 1205.7,780.3 1205.7,771.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1211.2,772.9 1211.2,782.3 1215.5,782.3 1215.5,773.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1222.8,775.2 1222.8,784.6 1227.1,784.6 1227.1,775.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.4,777.4 1232.4,786.9 1236.7,786.9 1236.7,777.7 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1170.4,785.1 1170.4,794.5 1174.8,794.5 1174.8,785.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1181.1,786.3 1181.1,795.7 1185.4,795.7 1185.4,786.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1191.9,788.9 1191.9,798.3 1195.6,798.3 1195.6,789.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1200.5,791.4 1200.5,800.9 1204.8,800.9 1204.8,791.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1211.5,793.4 1211.5,802.9 1215.9,802.9 1215.9,793.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1221.9,795.7 1221.9,805.1 1226.3,805.1 1226.3,795.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1232.1,798 1232.1,807.4 1236.5,807.4 1236.5,798.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1170.2,803 1170.2,812.4 1174.6,812.4 1174.6,803.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1181.4,804.2 1181.4,813.6 1185.8,813.6 1185.8,804.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1191.7,806.8 1191.7,816.2 1196,816.2 1196,807 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1200.9,809.3 1200.9,818.8 1205.2,818.8 1205.2,809.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1211.3,811.3 1211.3,820.8 1215.7,820.8 1215.7,811.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1222.3,813.6 1222.3,823 1226.6,823 1226.6,813.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1232.5,815.9 1232.5,825.3 1236.9,825.3 1236.9,816.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1170.7,822 1170.7,831.4 1175.1,831.4 1175.1,822.2 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1182,823.2 1182,832.6 1186.3,832.6 1186.3,823.4 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1192.2,825.8 1192.2,835.2 1196.5,835.2 1196.5,826 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1192.6,845.1 1192.6,854.5 1196.9,854.5 1196.9,845.3 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1172.9,846.4 1172.9,855.8 1177.2,855.8 1177.2,846.6 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1201.4,828.3 1201.4,837.8 1205.7,837.8 1205.7,828.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1211.8,830.3 1211.8,839.8 1216.2,839.8 1216.2,830.5 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1210,846.7 1210,856.1 1214.4,856.1 1214.4,846.9 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st3"
            points="1222.8,832.6 1222.8,842 1227.1,842 1227.1,832.8 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1233,834.9 1233,844.3 1237.4,844.3 1237.4,835.1 	"
          />
          <polygon
            onMouseEnter={handleHover}
            className="st6"
            points="1221,864 1221,873.4 1225.4,873.4 1225.4,864.2 	"
          />
        </g>
      </svg>
    </div>
  );
};

export default Building;
