export function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export function parseObjFromLS(key: string) {
  try {
    const rawData = localStorage.getItem(key);
    return JSON.parse(rawData ?? "");
  } catch (error) {
    return undefined;
  }
}

export function valueFromQS(key: string) {
  return new URLSearchParams(window.location.search).get(key);
}
