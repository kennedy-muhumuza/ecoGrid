import { audioActions } from "../reducers/audio";

export const playAudio = (audioPath) => {
  return async (dispatch) => {
    await dispatch(
      audioActions.playAudio({
        audioPath: audioPath,
      })
    );
    new Audio(audioPath).play();
  };
};

export const stopAudio = () => {
  return async (dispatch) => {
    await dispatch(audioActions.stopAudio());
  };
};
