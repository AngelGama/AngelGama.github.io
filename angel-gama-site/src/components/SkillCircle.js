export const SkillCircle = ({ percent, circleWidth }) => {

    const radius = circleWidth * 0.425;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percent) / 100;
    const strokeWidth = circleWidth * 0.075;

    return (
        <div>
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <defs>
                    <linearGradient id="gradient" >
                        <stop offset="0%" stop-color="#6F2DBD" />
                        <stop offset="20%" stop-color="#A663CC" />
                        <stop offset="40%" stop-color="#B298DC" />
                        <stop offset="80%" stop-color="#B8D0EB" />
                        <stop offset="100%" stop-color="#B9FAF8" />
                    </linearGradient>
                </defs>
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={strokeWidth}
                    r={radius}
                    className="circle-background"
                />
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={strokeWidth}
                    r={radius}
                    className="circle-progress"
                    style={
                        {
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }
                    }
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    stroke="url(#gradient)"
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="circle-text" fill="url(#gradient)">
                    {percent}%
                </text>
            </svg>
        </div>
    )
};