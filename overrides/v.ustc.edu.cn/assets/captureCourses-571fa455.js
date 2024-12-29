import {
  i as o,
  h as t,
  p as n,
  Z as y,
  b$ as u,
  dK as C,
  dL as g,
} from "./index-8e80cd51.js";
import { S as z, a as p, B as K, b as v } from "./captureCourse-1d01f607.js";
const b = async (a = {}, e = 1, r = 10) => {
    const s = { ...u(a, (d) => d !== ""), page: e, pageSize: r };
    // modified
    function str2code(semesterStr) {
      const baseYear = 2021;

      // 解析输入字符串
      let year = parseInt(semesterStr.slice(0, 2), 10) + 2000;
      const season = semesterStr.slice(2);

      // 将季节转换为数字
      let number;
      switch (season) {
        case "春":
          number = 2;
          year -= 1; // 属于上一年
          break;
        case "夏":
          number = 3;
          year -= 1; // 属于上一年
          break;
        case "秋":
          number = 1;
          break;
        default:
          return null; // 无效的季节
      }

      // 检查输入是否有效
      if (isNaN(year) || year < baseYear) {
        return null;
      }

      const semesterCode = `${year}-${number}`;
      return semesterCode;
    }

    function id2code(id) {
      const baseYear = 2021;
      const baseNumber = 2;

      id += baseNumber - 1;
      console.log(id);
      const year = baseYear + Math.floor(id / 3);
      console.log(year);
      const number = id % 3 || 3;

      const code = `${year}-${number}`;
      return code;
    }

    function splitString(str, func) {
      str = str.trim();

      // 使用正则表达式匹配空格、斜杠或减号
      let parts = str.split(/[\s\/-]+/);

      // 如果分割后的数组长度小于2，说明没有找到分隔符
      if (parts.length < 2) {
        parts = [str, ""]; // 返回原字符串和空字符串
      }

      // 查找func返回真值的部分
      const truePart = parts.find((part) => func(part)) || "";

      // 查找func返回假值的部分
      const falsePart = parts.find((part) => !func(part)) || "";

      return [falsePart, truePart];
    }

    let semesterCode, courseCode;

    if (s.keyword) {
      const keywordResult = splitString(s.keyword, str2code);
      console.log(keywordResult);
      if (keywordResult) {
        courseCode = keywordResult[0];
        semesterCode = str2code(keywordResult[1]);
        console.log(semesterCode);
        console.log(courseCode);
      }
    }

    const c = await o.get(
        `/api/v1/${semesterCode || id2code(s.semesterId)}/capture-courses/${
          courseCode || "MATH1006.01"
        }`
      ),
      courseData = c.data.data,
      i = t.decamelizeKeys({
        items: [courseData],
        page: 1,
        page_size: 20,
        total: 3,
      }),
      m = i.items;
    return (i.items = n(p, m)), i;

    // end modified
  },
  B = async (a) => {
    const e = await o.get(`/api/v1/course/${a}/schedules`);
    return y(e.data.data)
      ? []
      : n(z, t.camelizeKeys(e.data.data), { strategy: "excludeAll" });
  },
  $ = async (a) => {
    if (a.length) {
      const e = t.decamelizeKeys({ courseCodes: a });
      return (await o.get("/api/v1/course/avatar", { params: e })).data || {};
    }
    return {};
  },
  S = async (a = {}, e = 1, r = 10) => {
    const s = { ...u(a, (l) => l !== ""), page: e, pageSize: r },
      i = (await o.get("/api/v1/user-courses", { params: t.decamelizeKeys(s) }))
        .data.data,
      m = n(p, t.camelizeKeys(i.items));
    delete i.items;
    const d = t.camelizeKeys(i);
    return (d.items = m), d;
  },
  G = async (a) => {
    const e = t.decamelizeKeys(u(a, (i) => i !== "")),
      r = await o.get("/api/v1/my-instructed-capture-courses", { params: e }),
      s = t.camelizeKeys(r.data.data),
      c = n(p, s.items);
    return (s.items = c), s;
  },
  U = async (a) => {
    const e = t.decamelizeKeys({ ...u(a, (i) => i !== "") }),
      r = await o.get("/api/v1/capture-courses", { params: e }),
      s = t.camelizeKeys(r.data.data),
      c = n(p, s.items);
    return (s.items = c), s;
  },
  f = async (a) => {
    const e = t.decamelizeKeys({ captureCourseIds: a });
    return (
      await o.get("/api/v1/capture-courses/classroom-names", { params: e })
    ).data.data;
  },
  A = async (a, e) =>
    (await o.put(`/api/v1/capture-courses/${a}/setting`, t.decamelizeKeys(e)))
      .data,
  I = async (a, e) => {
    const r = t.decamelizeKeys({ ...u(a, (c) => c !== "") });
    return (
      await o.put("/api/v1/capture-courses:batchSetting", t.decamelizeKeys(e), {
        params: r,
      })
    ).data;
  },
  x = async (a) => {
    const e = t.decamelizeKeys({ ...u(a, (s) => s !== "") });
    return (await o.get("/api/v1/capture-courses:batchGetCount", { params: e }))
      .data;
  },
  N = async (a) => {
    await o.post(`/api/v1/capture-courses/${a}/visits`);
  },
  k = async (a) => {
    const e = t.decamelizeKeys({ captureCourseIds: a }),
      r = await o.get("/api/v1/capture-courses:batchGetByIds", { params: e }),
      s = t.camelizeKeys(r.data.data);
    return n(p, s);
  },
  D = async (a, e) => {
    const r = await o.get(
        `/api/v1/capture-courses/${a}/recently-visited-users`,
        { params: t.decamelizeKeys(e) }
      ),
      s = t.camelizeKeys(r.data.data),
      c = n(g, s.items);
    return (s.items = c), s;
  },
  T = async (a, e, r) => {
    const c = await o.get(`/api/v1/${a}/capture-courses/${e}`);
    // modified: remove entry information "{params: u({entry: r})}"
    return (
      (c.data.data = n(p, t.camelizeKeys(c.data.data), {
        strategy: "excludeAll",
      })),
      (c.data.error = t.camelizeKeys(c.data.error)),
      c.data
    );
  },
  V = async (a, e) => {
    const r = u({ entry: e }),
      s = await o.get(`/api/v1/capture-courses/${a}:byCode`, { params: r });
    return (
      (s.data.data = n(p, t.camelizeKeys(s.data.data), {
        strategy: "excludeAll",
      })),
      (s.data.error = t.camelizeKeys(s.data.error)),
      s.data
    );
  },
  E = async (a) => {
    const e = await o.get(
      `/api/v1/capture-courses/${a}/collections:batchGetAll`
    );
    return n(C, t.camelizeKeys(e.data.data));
  },
  M = async (a) => {
    await o.post(`/api/v1/capture-courses/${a}/collection`);
  },
  j = async (a) => {
    await o.delete(`/api/v1/capture-courses/${a}/collection`);
  },
  q = async (a) => {
    const e = t.decamelizeKeys({ userNo: a }),
      r = await o.get("/api/v1/current-canrecord-capture-courses:batchGet", {
        params: e,
      });
    return n(K, t.camelizeKeys(r.data.data));
  },
  L = async (a, e = 1, r = 10) => {
    const s = await o.get("/api/v1/capture-courses/teaching-class-names", {
        params: { page: e, pageSize: r, keyword: a },
      }),
      c = t.camelizeKeys(s.data.data);
    return (c.items = n(v, c.items)), c;
  };
export {
  $ as a,
  k as b,
  x as c,
  I as d,
  U as e,
  f,
  b as g,
  V as h,
  T as i,
  B as j,
  j as k,
  M as l,
  E as m,
  D as n,
  q as o,
  L as p,
  S as q,
  G as r,
  N as t,
  A as u,
};
