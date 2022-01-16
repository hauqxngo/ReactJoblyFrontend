import { useRef, useState, useEffect } from "react";

/** Custom hook for creating alert messages.
 *
 * This adds an item in state, `show`, which can be controlled by the
 * component as desired. The component would typically `setShow(true)`
 * to start displaying the message, and after `timeInMs`, active would
 * go back to false, which would typically stop showing the message.
 *
 * In the component:
 *
 *   const [myMsg, setMyMsg] = useTimedMessage();
 *
 *   function somethingDidntWork() {
 *     setMsg(true);
 *   }
 *
 *   return (
 *     {myMsg ? <p>Oh no!</p> : null}
 *   )
 *
 * While this hook was written for showing flash messages, it's really just
 * a hook for timed state clearing -- this same pattern could be useful for
 * other tasks.
 */

const useTimedMessage = (timeInMs = 3000) => {
  const [show, setShow] = useState(false);

  const msgShownRef = useRef(false);

  useEffect(
    (showMsg) => {
      if (show && !msgShownRef.current) {
        msgShownRef.current = true;
        setTimeout((removeMsg) => {
          setShow(false);
          msgShownRef.current = false;
        }, timeInMs);
      }
    },
    [show, timeInMs]
  );

  return [show, setShow];
};

export default useTimedMessage;
