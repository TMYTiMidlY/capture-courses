import {
  at as c,
  aB as x,
  aC as z,
  aD as C,
  aE as h,
  aF as w,
  h as i,
  aG as y,
  au as n,
  av as m,
  aH as K,
  aI as f,
} from "./index.1b2319a9.js";
import { C as b, S } from "./schedule.1e16344c.js";
import { S as I } from "./semester.ca88aa01.js";
var D = Object.defineProperty,
  N = Object.getOwnPropertyDescriptor,
  p = (e, t, r, a) => {
    for (
      var o = a > 1 ? void 0 : a ? N(t, r) : t, u = e.length - 1, d;
      u >= 0;
      u--
    )
      (d = e[u]) && (o = (a ? d(t, r, o) : d(o)) || o);
    return a && o && D(t, r, o), o;
  },
  P = ((e) => (
    (e.UPCOMING = "UPCOMING"), (e.INPROGRESS = "INPROGRESS"), (e.END = "END"), e
  ))(P || {});
class g {}
p([c()], g.prototype, "userNo", 2);
p([c()], g.prototype, "username", 2);
class s {
  constructor() {
    (this.startTime = ""), (this.instructors = []), (this.classrooms = []);
  }
  get instructorNames() {
    return w(this.instructors, "username");
  }
}
p([c()], s.prototype, "id", 2);
p([c()], s.prototype, "code", 2);
p([c()], s.prototype, "name", 2);
p([c(), x(({ value: e }) => z(e))], s.prototype, "startTime", 2);
p([c()], s.prototype, "departmentId", 2);
p([c(), C(() => g)], s.prototype, "instructors", 2);
p([c()], s.prototype, "canRecord", 2);
p([c()], s.prototype, "canLive", 2);
p([c()], s.prototype, "autoPublish", 2);
p([c()], s.prototype, "allowDownload", 2);
p([c()], s.prototype, "daemonRecord", 2);
p([c()], s.prototype, "audienceType", 2);
p([c()], s.prototype, "openScope", 2);
p([c()], s.prototype, "classificationId", 2);
p([c()], s.prototype, "status", 2);
p([c()], s.prototype, "studentCanView", 2);
p([c(), C(() => b)], s.prototype, "classrooms", 2);
p([c(), C(() => I)], s.prototype, "semester", 2);
p([c(), C(() => h)], s.prototype, "department", 2);
p([c()], s.prototype, "instructorNames", 1);
const E = async (e = {}, t = 1, r = 10) => {
    const a = {
      ...y(e, (l) => l !== ""),
      page: t,
      pageSize: r,
    };
    // modified
    if (a.keyword) {
      const keywordResult = a.keyword.match(/([\s\S]*)\?past=([0-9])/);
      if (keywordResult) {
        a.keyword = keywordResult[1];
        a.semesterId = (+a.semesterId - +keywordResult[2]).toString();
      }
    }
    const o = await i.get("/api/v1/capture-courses", {
        params: n.exports.decamelizeKeys(a),
      }),
      u = n.exports.camelizeKeys(o.data.data),
      d = u.items;
    return (u.items = m(s, d)), u;
  },
  R = async (e) => {
    const t = await i.get(`/api/v1/course/${e}/schedules`);
    return K(t.data.data)
      ? []
      : m(S, t.data.data, {
          strategy: "excludeAll",
        });
  },
  $ = async (e) => {
    if (e.length) {
      const t = n.exports.decamelizeKeys({
        courseCodes: e,
      });
      return (
        (
          await i.get("/api/v1/course/avatar", {
            params: t,
          })
        ).data || {}
      );
    }
    return {};
  },
  T = async (e = {}, t = 1, r = 10) => {
    const a = {
        ...y(e, (v) => v !== ""),
        page: t,
        pageSize: r,
      },
      u = (
        await i.get("/api/v1/user-courses", {
          params: n.exports.decamelizeKeys(a),
        })
      ).data.data,
      d = m(s, u.items);
    delete u.items;
    const l = n.exports.camelizeKeys(u);
    return (l.items = d), l;
  },
  U = async (e) => {
    const t = n.exports.decamelizeKeys({
        ...y(e, (u) => u !== ""),
      }),
      r = await i.get("/api/v1/capture-courses", {
        params: t,
      }),
      a = n.exports.camelizeKeys(r.data.data),
      o = m(s, a.items);
    return (a.items = o), a;
  },
  _ = async (e) => {
    const t = n.exports.decamelizeKeys({
      captureCourseIds: e,
    });
    return (
      await i.get("/api/v1/capture-courses/classroom-names", {
        params: t,
      })
    ).data.data;
  },
  A = async (e, t) =>
    (
      await i.put(
        `/api/v1/capture-courses/${e}/setting`,
        n.exports.decamelizeKeys(t)
      )
    ).data,
  V = async (e, t) => {
    const r = n.exports.decamelizeKeys({
      ...y(e, (o) => o !== ""),
    });
    return (
      await i.put(
        "/api/v1/capture-courses:batchSetting",
        n.exports.decamelizeKeys(t),
        {
          params: r,
        }
      )
    ).data;
  },
  j = async (e) => {
    const t = n.exports.decamelizeKeys({
      ...y(e, (a) => a !== ""),
    });
    return (
      await i.get("/api/v1/capture-courses:batchGetCount", {
        params: t,
      })
    ).data;
  },
  M = async (e) => {
    await i.post(`/api/v1/capture-courses/${e}/visits`);
  },
  F = async (e) => {
    const t = n.exports.decamelizeKeys({
        captureCourseIds: e,
      }),
      r = await i.get("/api/v1/capture-courses:batchGetByIds", {
        params: t,
      }),
      a = n.exports.camelizeKeys(r.data.data);
    return m(s, a);
  },
  H = async (e, t) => {
    const r = await i.get(
        `/api/v1/capture-courses/${e}/recently-visited-users`,
        {
          params: n.exports.decamelizeKeys(t),
        }
      ),
      a = n.exports.camelizeKeys(r.data.data),
      o = m(f, a.items);
    return (a.items = o), a;
  },
  L = async (e, t, r) => {
    // modified
    let semesterId;
    switch (e) {
      case "2023-1":
        semesterId = "6";
        break;
      case "2022-3":
        semesterId = "5";
        break;
      case "2022-2":
        semesterId = "4";
        break;
      case "2022-1":
        semesterId = "3";
        break;
      case "2021-2":
        semesterId = "1";
        break;
    }
    const a = {
        entry: r,
      },
      o = await i.get(
        `/api/v1/capture-courses?keyword=${t}&status=INPROGRESS&semester_id=${semesterId}&page=1&page_size=1`,
        {
          params: a,
        }
      );
    return (
      (o.data.data.items[0] = m(
        s,
        n.exports.camelizeKeys(o.data.data.items[0]),
        {
          strategy: "excludeAll",
        }
      )),
      (o.data.error = n.exports.camelizeKeys(o.data.error)),
      {
        data: o.data.data.items[0],
        error: o.data.error,
      }
    );
  },
  Y = async (e, t) => {
    const r = {
        entry: t,
      },
      a = await i.get(`/api/v1/capture-courses/${e}:byCode`, {
        params: r,
      });
    return (
      (a.data.data = m(s, n.exports.camelizeKeys(a.data.data), {
        strategy: "excludeAll",
      })),
      (a.data.error = n.exports.camelizeKeys(a.data.error)),
      a.data
    );
  };
export {
  P as C,
  $ as a,
  F as b,
  H as c,
  j as d,
  V as e,
  _ as f,
  E as g,
  U as h,
  Y as i,
  L as j,
  R as k,
  T as l,
  M as t,
  A as u,
};
