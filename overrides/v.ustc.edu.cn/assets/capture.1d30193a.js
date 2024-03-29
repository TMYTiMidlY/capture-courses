import {
  at as a,
  h as c,
  au as o,
  av as g,
  ez as l,
  aG as C,
} from "./index.1b2319a9.js";
import { P as h } from "./schedule.1e16344c.js";
var v = Object.defineProperty,
  z = Object.getOwnPropertyDescriptor,
  s = (e, t, r, p) => {
    for (
      var n = p > 1 ? void 0 : p ? z(t, r) : t, u = e.length - 1, m;
      u >= 0;
      u--
    )
      (m = e[u]) && (n = (p ? m(t, r, n) : m(n)) || n);
    return p && n && v(t, r, n), n;
  };
class i {}
s([a()], i.prototype, "id", 2);
s([a()], i.prototype, "code", 2);
s([a()], i.prototype, "name", 2);
s([a()], i.prototype, "orgCode", 2);
s([a()], i.prototype, "status", 2);
s([a()], i.prototype, "type", 2);
s([a()], i.prototype, "instructors", 2);
s([a()], i.prototype, "startTime", 2);
s([a()], i.prototype, "endTime", 2);
s([a()], i.prototype, "tagIds", 2);
s([a()], i.prototype, "course", 2);
class y {}
s([a()], y.prototype, "id", 2);
s([a()], y.prototype, "code", 2);
s([a()], y.prototype, "name", 2);
s([a()], y.prototype, "orgCode", 2);
s([a()], y.prototype, "startTime", 2);
s([a()], y.prototype, "endTime", 2);
s([a()], y.prototype, "course", 2);
class T {}
s([a()], T.prototype, "DOWNLOAD_REPLAY", 2);
class d {}
s([a()], d.prototype, "id", 2);
s([a()], d.prototype, "code", 2);
s([a()], d.prototype, "name", 2);
s([a()], d.prototype, "orgCode", 2);
s([a()], d.prototype, "startTime", 2);
s([a()], d.prototype, "endTime", 2);
s([a()], d.prototype, "schedule", 2);
const f = async (e, t, r = !1) => {
    const p = o.exports.decamelizeKeys({
      isLessonResource: r,
    });
    return (
      await c.get(`/api/v1/captures/${e}/capture-iframe-url?language=${t}`, {
        params: p,
      })
    ).data;
  },
  K = async (e) => {
    const t = await c.get(`/api/v1/captures/${e}/tags`),
      r = o.exports.camelizeKeys(t.data.data);
    return g(l, r);
  },
  D = async (e) => {
    const t = {
      ...C(e, (u) => u && u !== ""),
    };
    if (t != null && t.dateRange) {
      const [u, m] = t.dateRange;
      (t.startTimeGt = u), (t.startTimeLt = m);
    }
    const r = await c.get("/api/v1/captures", {
        params: o.exports.decamelizeKeys(t),
      }),
      p = o.exports.camelizeKeys(r.data.data),
      n = p.items;
    return (p.items = g(i, n)), p;
  },
  b = async (e, t) => {
    const r = {
      captureCodes: e,
      clearSchedule: t,
    };
    return await c.delete("/api/v1/captures:batchDelete", {
      params: o.exports.decamelizeKeys(r),
    });
  },
  O = async () => (await c.get("/api/v1/capture-settings")).data.data,
  P = async (e, t) =>
    (
      await c.put("/api/v1/capture-settings", {
        keys: e,
        values: t,
      })
    ).data,
  B = async (e) => {
    const t = {
      captureIds: e,
    };
    return (
      await c.post("/api/v1/capture-tags:batchGet", o.exports.decamelizeKeys(t))
    ).data.data;
  },
  G = async (e, t) => {
    await c.patch(`/api/v1/captures/${e}/tags`, o.exports.decamelizeKeys(t));
  },
  _ = async (e) => (await c.get(`/api/v1/captures/${e}/clip-url`)).data.data,
  $ = async (e) => {
    const t = await c.get("/api/v1/captures:batchGetByTag", {
        params: o.exports.decamelizeKeys({
          tagId: e,
        }),
      }),
      r = o.exports.camelizeKeys(t.data.data);
    return g(y, r);
  },
  S = async (e) => {
    const t = await c.get(`/api/v1/captures/${e}/schedule`),
      r = o.exports.camelizeKeys(t.data.data);
    return g(h, r);
  },
  I = async (e) => {
    const t = await c.get("/api/v1/captures:getByTag", {
        params: o.exports.decamelizeKeys(e),
      }),
      r = o.exports.camelizeKeys(t.data.data),
      p = r.items;
    return (r.items = g(d, p)), r;
  },
  L = async (e) => {
    const t = o.exports.decamelizeKeys({
        captureIds: e,
      }),
      r = await c.get("/api/v1/captures/capture-course", {
        params: t,
      });
    return o.exports.camelizeKeys(r.data.data);
  },
  j = async (e, t) => {
    const r = {
      entry: t,
    };
    // modified
    let p = await c.get(`/api/v1/captures/${e}:viewPermissionCheck`, {
      params: r,
    });
    p = { data: { error: {} } };
    return (p.data.error = o.exports.camelizeKeys(p.data.error)), p.data;
  };
export {
  f as a,
  b,
  D as c,
  B as d,
  L as e,
  _ as f,
  O as g,
  K as h,
  j as i,
  S as j,
  $ as k,
  I as l,
  G as p,
  P as u,
};
