import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export function useAnimatedNumber(target: number, duration = 1) {
	const [value, setValue] = useState(target);
	const valueRef = useRef(target);

	useGSAP(
		() => {
			const proxy = { val: valueRef.current };

			gsap.to(proxy, {
				val: target,
				duration,
				ease: "power3.out",
				onUpdate: () => {
					const rounded = Math.round(proxy.val);
					valueRef.current = rounded;
					setValue(rounded);
				},
			});
		},
		{ dependencies: [target] },
	);

	return value;
}
