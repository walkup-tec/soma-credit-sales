type MetaPixelEventName = "PageView" | "Lead" | "Contact" | "CompleteRegistration";

type MetaPixelParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (command: "track", eventName: MetaPixelEventName, parameters?: MetaPixelParams) => void;
  }
}

export const trackMetaEvent = (
  eventName: MetaPixelEventName,
  parameters?: MetaPixelParams
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", eventName, parameters);
};

export const trackMetaCustomEvent = (
  eventName: string,
  parameters?: MetaPixelParams
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  (window.fbq as unknown as (cmd: string, name: string, params?: MetaPixelParams) => void)(
    "trackCustom",
    eventName,
    parameters
  );
};
