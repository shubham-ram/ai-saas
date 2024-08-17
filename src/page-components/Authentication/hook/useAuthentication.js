import { useForm } from "react-hook-form";
import useSound from "use-sound";

import errorSound from "@/sound/error.mp3";

const useAuthentication = () => {
	const formHook = useForm();
	const [play] = useSound(errorSound);
	// const { handleSubmit } = formHook;

	const onSubmit = (data) => {
		console.log(data);
	};

	const onError = (error) => {
		console.log(error);
		play();
	};

	return { formHook, onSubmit, onError };
};

export default useAuthentication;
