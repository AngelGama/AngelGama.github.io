import { v4 as uuidv4 } from 'uuid';

export const SkillCircle = ({ percent, circleWidth }) => {

    const gradientId = `gradient-${uuidv4()}`;

    const radius = circleWidth * 0.425;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percent) / 100;
    const strokeWidth = circleWidth * 0.075;

    const setPRoficiency = () => {
        return percent >= 85 ? "Skilled" : percent >= 75 ? "Proficient" : "Competent";
    };

    return (
        <div>
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <defs>
                    <linearGradient id={gradientId} gradientTransform="rotate(70)" >
                        <stop offset="0%" stop-color="var(--tertiary)" />
                        <stop offset="50%" stop-color="var(--secondary)" />
                        <stop offset="100%" stop-color="var(--primary)" />
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
                    stroke={`url(#${gradientId})`}
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="circle-text" fill={`url(#${gradientId})`}>
                    {setPRoficiency(percent)}
                </text>
            </svg>
        </div>
    )
};