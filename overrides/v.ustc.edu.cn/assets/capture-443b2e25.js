import {
  dF as v,
  di as N,
  fy as S,
  dl as P,
  a as L,
  k as E,
  u as R,
  a1 as k,
  A as w,
  bZ as p,
  fz as m,
  cb as d,
  fA as V,
  bT as y,
} from "./index-8e80cd51.js";
import { g as D, o as M, q as U, r as W, s as $ } from "./capture-6b754c68.js";
import { i as T } from "./includes-7746ba81.js";
import { i as h } from "./_isIterateeCall-8408f4d1.js";
function B(r, l) {
  var n;
  return (
    v(r, function (u, i, f) {
      return (n = l(u, i, f)), !n;
    }),
    !!n
  );
}
function z(r, l, n) {
  var u = N(r) ? S : B;
  return n && h(r, l, n) && (l = void 0), u(r, P(l));
}
const oe = () => {
    const { state: r } = L(D, { DOWNLOAD_REPLAY: "ALLOWALL" });
    return {
      enableDownloadCapture: E(() => r.value.DOWNLOAD_REPLAY === "ALLOWALL"),
    };
  },
  te = (r) => {
    const { locale: l } = R(),
      { userInfo: n } = k(),
      u = w(!0),
      i = w(),
      f = w(),
      {
        getOrgSettingByName: A,
        getOrgSettingByNameJsonValue: O,
        getOrgSettingByNameNumberValue: b,
      } = V();
    return {
      hasCapture: u,
      capture: i,
      capturePermission: f,
      initCapture: async (o, e = !1) => {
        (i.value = await M(r, "", e)), // modified: o to ""
          i.value && i.value.id
            ? ((u.value = !0),
              (f.value = await U(i.value.id)),
              (i.value.videos = i.value.lessonVideos))
            : (u.value = !1);
      },
      getPlayerVideos: (o) =>
        o.videos
          ? o.videos.map((e) => ({
              id: e.id,
              src: e.playUrl,
              type: e.playType,
              label: e.label.toLowerCase(),
              key: e.label.toLowerCase() + e.id,
              mute: e.mute,
              volume: e.mute ? 0 : 0.7,
            }))
          : [],
      getCaptionConfig: async (o, e, t, g = "") => {
        if (!e.caption.toggle) return { toggle: !1 };
        const a = p(o.videos, { isBestAudio: !0 });
        if (!a)
          return (
            console.warn("No best audio source for generate caption"),
            { toggle: !1 }
          );
        let s = "";
        e.caption.create && (s = a.downloadUrl);
        const c = await b(m.CAPTION_PARAGRAPH_SPLIT_INTERVAL),
          C = `/incast/api/media-captions/${
            o.code
          }/download?filename=${encodeURIComponent(o.name)}&org_code=${
            o.orgCode
          }`;
        return {
          toggle: !0,
          mediaId: o.code,
          server: t,
          source: s,
          organization: o.orgCode,
          callback: g,
          downloadUrl: C,
          permissions: e.caption,
          paragraphSplitInterval: c,
          enableTranslate: e.caption.enableTranslate,
        };
      },
      getTopicConfig: async (o, e, t, g = "") => {
        const a = p(o.videos, { isBestAudio: !0 }),
          s = p(o.videos, { label: "ENCODER" });
        if ((!s && !a) || !e.topic.toggle)
          return (
            console.warn("no best audio and encoder video for generate topic"),
            { toggle: !1 }
          );
        const c = (await A(m.TOPIC_SOURCE)) || "ASR";
        let C = null,
          I = null;
        return (
          a && T(c, "ASR") && (C = a.downloadUrl),
          s && T(c, "OCR") && (I = s.downloadUrl),
          {
            toggle: e.topic.toggle,
            mediaId: o.code,
            server: t,
            callback: g,
            upsertCallback: g,
            organization: o.orgCode,
            lang: l.value,
            permissions: d(e, "topic.permissions", {}),
            aiTopic: {
              toggle: !0,
              category: o.name,
              asrInput: C,
              ocrInput: I,
              permissions: d(e, "topic.ai", {}),
            },
            manualTopic: { toggle: !0, permissions: d(e, "topic.manual", {}) },
          }
        );
      },
      getWaterMarkConfig: async (o, e) => {
        if (!e.canWaterMark) return { toggle: !1 };
        const t = (await A(m.WATER_MARK_CUSTOMIZATION_INFO)) || "";
        return {
          toggle: !0,
          text: n.value ? `${t} ${n.value.username}${n.value.userNo}` : t,
        };
      },
      getNoteConfig: async (o, e) => {
        if (!e.note.toggle) return { toggle: !1 };
        let t = null;
        return (
          e.note.toggle && (t = await W(o.code)),
          { toggle: e.note.toggle, token: t, permissions: d(e, "note", {}) }
        );
      },
      getDownloadConfig: (o, e) => ({
        toggle: e.canDownload,
        onClick: () => {
          o && (window.location.href = `/api/v1/captures/${o.code}/download`);
        },
      }),
      getPPTConfig: async (o, e, t, g = "") => {
        if (!e.ppt.toggle) return { toggle: !1 };
        const a = p(o.videos, { label: "ENCODER" });
        return a
          ? {
              toggle: e.ppt.toggle,
              mediaId: o.code,
              server: t,
              source: a.downloadUrl,
              organization: o.orgCode,
              callback: g,
              permissions: d(e, "ppt", {}),
            }
          : (console.warn("no encoder video for generate ppt"), { toggle: !1 });
      },
      getVideoEditorConfig: (o, e, t) => {
        const g = async (a) => {
          const s = { mediaId: o.code, targetIds: [], ...a },
            c = await $(s);
          return (
            c.id
              ? s.sourceId
                ? y.success(t("captureManagement.saveSuccessTip"))
                : y.success(t("captureManagement.savedWithoutTaskTip"))
              : y.error(t("operateFailed")),
            !!c.id
          );
        };
        return {
          toggle: z([e.canClip, e.canComposite]),
          mediaId: o.code,
          clip: {
            toggle: e.canClip,
            onClick: () => {
              window.open(
                `${window.location.origin}/capture-course/${o.code}/clip`,
                "_blank"
              );
            },
          },
          audioCopier: { toggle: e.canComposite, onSubmit: g },
        };
      },
      getCopyrightNotice: async () =>
        await O(m.CUSTOM_REPLAY_VIDEO_COPYRIGHT_NOTICE),
    };
  };
export { te as a, oe as u };
