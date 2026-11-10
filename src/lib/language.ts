export type LanguageCode = "ta" | "hi" | "te" | "ml";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  htmlLang: string;
  fontClass: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
    htmlLang: "ta-IN",
    fontClass: "font-tamil",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    htmlLang: "hi-IN",
    fontClass: "font-deva",
  },
  {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
    htmlLang: "te-IN",
    fontClass: "font-telugu",
  },
  {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
    htmlLang: "ml-IN",
    fontClass: "font-malayalam",
  },
];

export const DEFAULT_LANGUAGE: LanguageCode = "ta";

export const LANGUAGE_MAP: Record<LanguageCode, LanguageOption> =
  Object.fromEntries(LANGUAGES.map((language) => [language.code, language])) as Record<
    LanguageCode,
    LanguageOption
  >;

export function isLanguageCode(value: unknown): value is LanguageCode {
  return (
    typeof value === "string" &&
    LANGUAGES.some((language) => language.code === value)
  );
}

/**
 * Native names for every celebration in the four supported second languages.
 * The English name remains the primary display name; this is the optional
 * second-language line shown on cards, listings and celebration pages.
 */
export const NATIVE_NAMES: Record<string, Record<LanguageCode, string>> = {
  diwali: {
    ta: "தீபாவளி",
    hi: "दीपावली",
    te: "దీపావళి",
    ml: "ദീപാവലി",
  },
  holi: {
    ta: "ஹோலி",
    hi: "होली",
    te: "హోలీ",
    ml: "ഹോളി",
  },
  onam: {
    ta: "ஓணம்",
    hi: "ओणम",
    te: "ఓణం",
    ml: "ഓണം",
  },
  pongal: {
    ta: "பொங்கல்",
    hi: "पोंगल",
    te: "పొంగల్",
    ml: "പൊങ്കൽ",
  },
  navratri: {
    ta: "நவராத்திரி",
    hi: "नवरात्रि",
    te: "నవరాత్రి",
    ml: "നവരാത്രി",
  },
  "ganesh-chaturthi": {
    ta: "விநாயக சதுர்த்தி",
    hi: "गणेश चतुर्थी",
    te: "వినాయక చవితి",
    ml: "വിനായക ചതുര്ത്ഥി",
  },
  janmashtami: {
    ta: "கிருஷ்ண ஜெயந்தி",
    hi: "जन्माष्टमी",
    te: "కృష్ణాష్టమి",
    ml: "കൃഷ്ണാഷ്ടമി",
  },
  "raksha-bandhan": {
    ta: "ரக்ஷா பந்தன்",
    hi: "रक्षा बंधन",
    te: "రాఖీ పండుగ",
    ml: "രക്ഷാബന്ധൻ",
  },
  ugadi: {
    ta: "உகாதி",
    hi: "उगादी",
    te: "ఉగాది",
    ml: "ഉഗാദി",
  },
  "makar-sankranti": {
    ta: "மகர சங்கிராந்தி",
    hi: "मकर संक्रांति",
    te: "మకర సంక్రాంతి",
    ml: "മകര സംക്രാന്തി",
  },
  "maha-shivratri": {
    ta: "மகா சிவராத்திரி",
    hi: "महा शिवरात्रि",
    te: "మహా శివరాత్రి",
    ml: "മഹാ ശിവരാത്രി",
  },
  "ram-navami": {
    ta: "ராம நவமி",
    hi: "राम नवमी",
    te: "రామ నవమి",
    ml: "രാമ നവമി",
  },
  "karva-chauth": {
    ta: "கர்வா சௌத்",
    hi: "करवा चौथ",
    te: "కర్వా చౌత్",
    ml: "കർവാ ചൗത്ത്",
  },
  vishu: {
    ta: "விஷு",
    hi: "विशु",
    te: "విషు",
    ml: "വിഷു",
  },
  "chhath-puja": {
    ta: "சத் பூஜை",
    hi: "छठ पूजा",
    te: "ఛఠ్ పూజ",
    ml: "ഛഠ് പൂജ",
  },
  "ramzan-eid": {
    ta: "ரம்ஜான் / ஈத்",
    hi: "रमज़ान / ईद",
    te: "రంజాన్ / ఈద్",
    ml: "റംസാൻ / ഈദ്",
  },
  muharram: {
    ta: "முஹர்ரம்",
    hi: "मुहर्रम",
    te: "ముహర్రం",
    ml: "മുഹർറം",
  },
  birthday: {
    ta: "பிறந்தநாள்",
    hi: "जन्मदिन",
    te: "పుట్టినరోజు",
    ml: "ജന്മദിനം",
  },
  wedding: {
    ta: "திருமணம்",
    hi: "विवाह",
    te: "వివాహం",
    ml: "വിവാഹം",
  },
  engagement: {
    ta: "நிச்சயதார்த்தம்",
    hi: "सगाई",
    te: "నిశ్చయతాంబూలం",
    ml: "വിവാഹനിശ്ചയം",
  },
  "ear-piercing": {
    ta: "காது குத்துதல்",
    hi: "कान छेदन",
    te: "చెవి కుట్టడం",
    ml: "കാതുകുത്ത്",
  },
  namkaran: {
    ta: "பெயரிடுதல்",
    hi: "नामकरण",
    te: "నామకరణం",
    ml: "നാമകരണം",
  },
  annaprashan: {
    ta: "அன்னப்பிராசனம்",
    hi: "अन्नप्राशन",
    te: "అన్నప్రాశన",
    ml: "അന്നപ്രാശനം",
  },
  "griha-pravesh": {
    ta: "கிரகப்பிரவேசம்",
    hi: "गृह प्रवेश",
    te: "గృహప్రవేశం",
    ml: "ഗൃഹപ്രവേശം",
  },
  upanayana: {
    ta: "உபநயனம்",
    hi: "उपनयन",
    te: "ఉపనయనం",
    ml: "ഉപനയനം",
  },
  vaisakhi: {
    ta: "வைசாகி",
    hi: "बैसाखी",
    te: "వైశాఖి",
    ml: "വൈശാഖി",
  },
  "guru-nanak-gurpurab": {
    ta: "குரு நானக் குர்புரப்",
    hi: "गुरु नानक गुरुपुरब",
    te: "గురు నానక్ గురుపురబ్",
    ml: "ഗുരു നാനാക് ഗുരുപുരബ്",
  },
  "bandi-chhor-divas": {
    ta: "பந்தி சோர் திவாஸ்",
    hi: "बंदी छोड़ दिवस",
    te: "బందీ ఛోర్ దివస్",
    ml: "ബന്ദി ഛോർ ദിവസ്",
  },
  "mahavir-jayanti": {
    ta: "மகாவீர் ஜெயந்தி",
    hi: "महावीर जयंती",
    te: "మహావీర్ జయంతి",
    ml: "മഹാവീർ ജയന്തി",
  },
  paryushan: {
    ta: "பர்யுஷன்",
    hi: "पर्युषण",
    te: "పర్యుషన్",
    ml: "പര്യുഷൻ",
  },
  christmas: {
    ta: "கிறிஸ்துமஸ்",
    hi: "क्रिसमस",
    te: "క్రిస్మస్",
    ml: "ക്രിസ്മസ്",
  },
  "new-year": {
    ta: "புத்தாண்டு",
    hi: "नव वर्ष",
    te: "నూతన సంవత్సరం",
    ml: "പുതുവർഷം",
  },
};

export function getNativeName(
  slug: string,
  language: LanguageCode,
): string | undefined {
  return NATIVE_NAMES[slug]?.[language];
}

export function getAllNativeNames(slug: string): string[] {
  const names = NATIVE_NAMES[slug];
  if (!names) return [];
  return LANGUAGES.map((language) => names[language.code]).filter(Boolean);
}
