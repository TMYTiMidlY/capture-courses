import {
  d as ee,
  u as te,
  A as E,
  b5 as se,
  ca as K,
  k as ie,
  dr as ue,
  o as n,
  c as l,
  b as e,
  e as u,
  E as N,
  _ as O,
  l as y,
  t as s,
  f as t,
  w as pe,
  v as de,
  F as M,
  r as U,
  g as S,
  s as h,
  m as $,
  bK as Z,
  ds as me,
  dt as _e,
  df as J,
  du as xe,
  x as fe,
  D as he,
  I as ve,
  a1 as Ce,
  M as ye,
  H as ke,
  a as Q,
  Z as Ne,
} from "./index-8e80cd51.js";
/* empty css             */ import { E as oe } from "./divider-2e3047db.js";
import { _ as ae } from "./Tooltip-35cfdd1e.js";
import { _ as be } from "./PeerLearning.vue_vue_type_style_index_0_lang-f4b89996.js";
import { a as Ie, E as we } from "./breadcrumb-item-3834ac4d.js";
import { F as k } from "./common-d2275ef8.js";
import { _ as ge } from "./LiveLayout.vue_vue_type_script_setup_true_lang-856e871a.js";
import { f as X } from "./format-7a4d8ce0.js";
import {
  d as De,
  a as Ee,
  b as Se,
  c as $e,
  e as Te,
} from "./cover-default-5-5900f49a.js";
import { d as Ae } from "./avatar-eccf9b6f.js";
/* empty css               */ import { u as Re } from "./player-1745ed3f.js";
import { E as Ge } from "./index-cd398c35.js";
import { _ as Oe } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  t as Le,
  h as Fe,
  i as Ve,
  j as Be,
  a as Pe,
  k as He,
  l as Me,
  m as Ue,
} from "./captureCourses-571fa455.js";
import { a as qe } from "./statistic-822160fe.js";
import { u as je } from "./collection-6c2884ad.js";
import { u as We } from "./features-138c7e7f.js";
import { u as ze } from "./useEntry-4a436709.js";
import { l as Ye } from "./load-failed-63e2004c.js";
import { u as Ke } from "./union-e2b59439.js";
import "./popper-878f4536.js";
import "./isNil-c75b1b34.js";
import "./index-75bf5e22.js";
/* empty css                */ import "./schedules-aede8d61.js";
import "./captureCourse-1d01f607.js";
import "./classrooms-61691da5.js";
import "./semester-ba636a32.js";
import "./_baseDifference-a71ad5d9.js";
import "./_arrayIncludesWith-48efb996.js";
import "./_baseIndexOf-a06bdafd.js";
import "./_baseFlatten-22d0f10c.js";
import "./isArrayLikeObject-f8301e5f.js";
import "./_overRest-b5735be5.js";
import "./index-e40132d5.js";
import "./index-d058dd4c.js";
import "./error-78e43d3e.js";
import "./scroll-f5144cac.js";
import "./vnode-c656dd72.js";
import "./index-852bd970.js";
import "./refs-d6db451d.js";
import "./event-9519ab40.js";
import "./index-a7814bcd.js";
import "./image-viewer-cdbd882b.js";
import "./browser-71c7e5f0.js";
import "./index-e53db662.js";
import "./DefaultLayout-681f91fd.js";
import "./scrollbar-0f476697.js";
import "./LayoutHeader-01f76c8e.js";
import "./UserMenus-dc24d9f1.js";
import "./config-2958fe56.js";
import "./useLocale-e125bc87.js";
import "./aria-bc8e8b0f.js";
import "./index-a239d573.js";
import "./index-201e2d09.js";
import "./dropdown-503a69cf.js";
import "./dropdown-b1de474f.js";
/* empty css                      */ /* empty css                   */ import "./SortFilter.vue_vue_type_script_setup_true_lang-3d43b795.js";
import "./cloneDeep-a84c7b28.js";
import "./_baseClone-40c67d60.js";
import "./_arrayEach-0e9334a0.js";
import "./_copyArray-eaf5ad29.js";
import "./forEach-c9816bce.js";
import "./index-7355e1df.js";
import "./_baseUniq-7f3f9cd1.js";
import "./noop-cb277961.js";
const Ze = { class: "schedule-wrapper" },
  Je = { class: "ml-20px text-t5" },
  Qe = { class: "text-t2 text-sm ml-5px" },
  Xe = { class: "content" },
  et = { class: "wrapper pl-45px" },
  tt = ["onClick"],
  st = { class: "info" },
  ot = { class: "mt-20px flex items-center" },
  at = { class: "tag flex ml-8px h-auto justify-center" },
  rt = { key: 0, class: "p-0.5 px-2 living-tag text-primary rounded-12px" },
  nt = y(),
  ct = { key: 1, class: "p-0.5 px-2 upcoming-tag text-w3 rounded-12px" },
  lt = { key: 2, class: "p-0.5 px-2 bg-f7 text-t2 rounded-12px" },
  it = {
    key: 3,
    class: "living-tag p-0.5 px-2 text-primary flex rounded-12px",
  },
  ut = {
    class: "mt-6px ml-6 text-t2 pb-19px font-normal text-sm flex items-center",
  },
  pt = { key: 0 },
  dt = { class: "truncate max-w-300px inline-block self-center" },
  mt = { class: "mt-25px operate" },
  _t = { class: "text-primary button" },
  xt = { key: 2, class: "text" },
  ft = { key: 3, class: "text" },
  ht = { key: 4, class: "text" },
  vt = ee({
    props: { week: null, schedules: null, fromType: null },
    setup(L) {
      const f = L,
        { t: d } = te(),
        i = E(!0),
        v = (a) => d(`week.week${me(a)}`),
        C = (a) => {
          const V = K(a.slotNos, (b) => b.toString()).join(", ");
          return {
            id: a.id,
            name: a.name,
            slot: V,
            startTime: a.startTime,
            timePrefix: `${_e(a.startTime)} `,
            timeSuffix: `${J(a.startTime)} - ${J(a.endTime)}`,
            duration: `${xe(a.endTime, a.startTime)}:00`,
            location: `${a.location.buildingName} ${a.location.classroomName}`,
            status: a.status,
            captureCode: a.captureCode,
          };
        },
        w = se({
          week: f.week,
          schedules: K(f.schedules, (a) => C(a)),
          scheduleNum: f.schedules.length,
        }),
        q = () => {
          i.value = !i.value;
        },
        { toReplayDetail: o, toLiveDetail: T } = Re(),
        g = ie(() => ue(k, f.fromType) || k.captureCourse),
        F = (a) => {
          if (
            ["LIVING_AND_RECORDING", "LIVING_AND_RECORD_PAUSING"].includes(
              a.status
            )
          )
            return T(a.id, g.value);
          if (a.status === "FINISHED") return o(a.captureCode || "no-capture");
          a.captureCode ? o(a.captureCode) : T(a.id, g.value);
        };
      return (a, V) => {
        const b = oe,
          A = ae,
          B = Ge;
        return (
          n(),
          l("div", Ze, [
            e(
              "div",
              {
                class:
                  "title w-full bg-f2 h-46px flex items-center cursor-pointer rounded-sm",
                onClick: q,
              },
              [
                u(
                  O,
                  {
                    icon: "caret-bottom",
                    class: N([
                      "fill-black w-12px h-12px ml-16px",
                      { "arrow-icon": !i.value },
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                e("span", Je, [
                  y(s(t(d)("courseDetail.nthWeek", { n: t(w).week })) + " ", 1),
                  e(
                    "span",
                    Qe,
                    "(" +
                      s(
                        t(d)("courseDetail.nActivity", { n: t(w).scheduleNum })
                      ) +
                      ")",
                    1
                  ),
                ]),
              ]
            ),
            pe(
              e(
                "div",
                Xe,
                [
                  e("div", et, [
                    (n(!0),
                    l(
                      M,
                      null,
                      U(
                        t(w).schedules,
                        (r, P) => (
                          n(),
                          l(
                            "div",
                            {
                              key: r.id,
                              class: N([
                                "flex justify-between cursor-pointer",
                                {
                                  "border-b-1 border-e1":
                                    P !== t(w).schedules.length - 1,
                                },
                              ]),
                              onClick: (j) => F(r),
                            },
                            [
                              e("div", st, [
                                e("section", ot, [
                                  e(
                                    "span",
                                    {
                                      class: N({
                                        "text-t2": ![
                                          "FINISHED",
                                          "LIVING_AND_RECORDING",
                                          "LIVING_AND_RECORD_PAUSING",
                                        ].includes(r.status),
                                      }),
                                    },
                                    s(P + 1) + ". ",
                                    3
                                  ),
                                  u(
                                    O,
                                    {
                                      icon: "capture",
                                      class: N([
                                        "w-14px h-14px ml-15px",
                                        {
                                          "text-t2": ![
                                            "FINISHED",
                                            "LIVING_AND_RECORDING",
                                            "LIVING_AND_RECORD_PAUSING",
                                          ].includes(r.status),
                                        },
                                      ]),
                                    },
                                    null,
                                    8,
                                    ["class"]
                                  ),
                                  e(
                                    "span",
                                    {
                                      class: N([
                                        "ml-8px title",
                                        {
                                          "text-t2": ![
                                            "FINISHED",
                                            "LIVING_AND_RECORDING",
                                            "LIVING_AND_RECORD_PAUSING",
                                          ].includes(r.status),
                                        },
                                      ]),
                                    },
                                    s(r.name),
                                    3
                                  ),
                                  e("div", at, [
                                    r.status === "LIVING_AND_RECORDING" ||
                                    r.status === "LIVING_AND_RECORD_PAUSING"
                                      ? (n(),
                                        l("section", rt, [
                                          u(O, {
                                            icon: "living",
                                            class: "fill-primary",
                                          }),
                                          nt,
                                          e(
                                            "span",
                                            null,
                                            s(t(d)("scheduleStatus.living")),
                                            1
                                          ),
                                        ]))
                                      : r.status === "UPCOMING"
                                      ? (n(),
                                        l("section", ct, [
                                          e(
                                            "span",
                                            null,
                                            s(t(d)("scheduleStatus.upcoming")),
                                            1
                                          ),
                                        ]))
                                      : [
                                          "WAITING_TRANSCODE",
                                          "TRANSCODING",
                                          "FINISHED",
                                          "FAILED",
                                        ].includes(r.status)
                                      ? (n(),
                                        l("section", lt, [
                                          e(
                                            "span",
                                            null,
                                            s(t(d)("scheduleStatus.finished")),
                                            1
                                          ),
                                        ]))
                                      : (n(),
                                        l("section", it, [
                                          u(O, {
                                            icon: "dot",
                                            class:
                                              "fill-primary w-5px h-5px self-center",
                                          }),
                                          e(
                                            "span",
                                            null,
                                            s(t(d)("scheduleStatus.recording")),
                                            1
                                          ),
                                        ])),
                                  ]),
                                ]),
                                e("section", ut, [
                                  r.slot
                                    ? (n(),
                                      l("span", pt, [
                                        y(
                                          s(
                                            t(d)("courseDetail.slotNo", {
                                              n: r.slot,
                                            })
                                          ),
                                          1
                                        ),
                                        u(b, { direction: "vertical" }),
                                      ]))
                                    : S("", !0),
                                  e("span", null, [
                                    y(
                                      s(r.timePrefix) +
                                        " " +
                                        s(v(r.startTime)) +
                                        " " +
                                        s(r.timeSuffix),
                                      1
                                    ),
                                    u(b, { direction: "vertical" }),
                                  ]),
                                  e("span", null, [
                                    y(s(r.duration), 1),
                                    u(b, { direction: "vertical" }),
                                  ]),
                                  u(
                                    A,
                                    { content: r.location, placement: "top" },
                                    {
                                      default: h(() => [
                                        e("div", dt, [
                                          e("span", null, s(r.location), 1),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["content"]
                                  ),
                                ]),
                              ]),
                              e("div", mt, [
                                [
                                  "LIVING_AND_RECORDING",
                                  "LIVING_AND_RECORD_PAUSING",
                                ].includes(r.status)
                                  ? (n(),
                                    $(
                                      B,
                                      {
                                        key: 0,
                                        class: "border-primary",
                                        onClick: Z(
                                          (j) => t(T)(r.id, t(k).captureCourse),
                                          ["stop"]
                                        ),
                                      },
                                      {
                                        default: h(() => [
                                          e(
                                            "span",
                                            _t,
                                            s(t(d)("liveOperate.watchLive")),
                                            1
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick"]
                                    ))
                                  : r.status === "FINISHED"
                                  ? (n(),
                                    $(
                                      B,
                                      {
                                        key: 1,
                                        class: "button",
                                        onClick:(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            window.open(`https://v.ustc.edu.cn/api/v1/captures/${r.captureCode}/download`)
                                          },
                                        // modified: stop propagation and start download
                                      },
                                      {
                                        default: h(() => [
                                          y(
                                            s(t(d)("liveOperate.watchReplay")),
                                            1
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onClick"]
                                    ))
                                  : r.status === "UPCOMING"
                                  ? (n(),
                                    l(
                                      "span",
                                      xt,
                                      s(t(d)("liveOperate.upcoming")),
                                      1
                                    ))
                                  : [
                                      "WAITING_TRANSCODE",
                                      "TRANSCODING",
                                      "FAILED",
                                    ].includes(r.status)
                                  ? (n(),
                                    l(
                                      "span",
                                      ft,
                                      s(t(d)("liveOperate.transcoding")),
                                      1
                                    ))
                                  : (n(),
                                    l(
                                      "span",
                                      ht,
                                      s(t(d)("liveOperate.waitForFinish")),
                                      1
                                    )),
                              ]),
                            ],
                            10,
                            tt
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                512
              ),
              [[de, i.value]]
            ),
          ])
        );
      };
    },
  });
const Ct = Oe(vt, [["__scopeId", "data-v-3468efa7"]]),
  yt = { class: "bg-white" },
  kt = { class: "px-container h-273px" },
  Nt = { class: "flex space-x-6" },
  bt = { class: "relative" },
  It = ["src"],
  wt = { class: "flex flex-col flex-1 justify-between" },
  gt = { class: "flex flex-col space-y-2" },
  Dt = { class: "flex justify-between" },
  Et = { class: "font-medium text-2xl leading-9" },
  St = { class: "flex items-center font-normal text-t3 text-base" },
  $t = { class: "flex items-center" },
  Tt = { class: "mr-1" },
  At = { class: "max-w-35 inline-block truncate" },
  Rt = { key: 0, class: "flex items-center" },
  Gt = { class: "mr-1" },
  Ot = { class: "max-w-35 inline-block truncate" },
  Lt = { key: 1, class: "flex items-center" },
  Ft = { class: "mr-1" },
  Vt = { class: "max-w-35 inline-block truncate" },
  Bt = { key: 0, class: "flex items-center font-normal text-t3 text-base" },
  Pt = { class: "flex justify-between" },
  Ht = { class: "text-sm text-t2 flex items-center" },
  Mt = { class: "flex" },
  Ut = {
    key: 0,
    class: "border-1px border-solid border-l2 rounded-3px h-8 pl-14px pr-16px",
  },
  qt = { class: "flex items-center text-sm font-normal" },
  jt = { class: "flex flex-row min-h-800px mb-50px" },
  Wt = { class: "content bg-white flex-1 mr-24px" },
  zt = { class: "ml-20px mt-24px text-xl flex items-center" },
  Yt = e(
    "div",
    { class: "rounded-8px h-4.5 mr-1 bg-primary w-1 inline-block" },
    null,
    -1
  ),
  Kt = { key: 0, class: "schedule pl-24px pr-24px pt-34px" },
  Zt = { key: 1 },
  Jt = { class: "items-center justify-center flex mt-24px" },
  Qt = { class: "text-primary" },
  Xt = {
    class: "sidebar ml-auto w-270px bg-white rounded-8px h-min min-h-200px",
  },
  es = { class: "ml-20px mt-24px flex items-center" },
  ts = e(
    "div",
    { class: "rounded-8px h-4.5 mr-6px bg-primary w-1 inline-block" },
    null,
    -1
  ),
  ss = ["src"],
  os = { class: "ml-10px inline-block max-w-36 truncate" },
  ko = ee({
    props: { semesterCode: null, code: null, fromType: null },
    setup(L) {
      const f = L,
        { getEntryByPathType: d } = ze(),
        { t: i } = te(),
        v = fe(),
        C = he(),
        { enableCollectCaptureCourse: w, showTeachingClassName: q } = We(),
        o = E({
          id: 0,
          name: "",
          startTime: "",
          department: "",
          location: "",
          instructors: [],
          academic: "",
          status: "UPCOMING",
          code: "",
          teachingClassName: "",
        }),
        T = () => [De, Ee, Se, $e, Te][o.value.id % 5],
        g = E({}),
        F = E({}),
        a = E({}),
        V = async () => {
          var H, I, D;
          const p = d(f.fromType);
          let m;
          f.semesterCode === "-"
            ? (m = await Fe(f.code, p))
            : (m = await Ve(f.semesterCode, f.code, p));
          const c = m.data,
            R = Ke(c.instructors.map((G) => G.userNo).flat()).join();
          o.value = {
            id: c.id,
            name: c.name,
            startTime: c.startTime,
            department: c.department ? c.department.name : "",
            location: c.position,
            instructors: c.instructors,
            academic: `${
              (I = (H = c.semester) == null ? void 0 : H.academicYear) == null
                ? void 0
                : I.name
            } ${(D = c.semester) == null ? void 0 : D.name}`,
            status: c.status,
            code: c.code,
            teachingClassName: c.teachingClassName,
          };
          try {
            g.value = await ke(R);
          } catch {
            g.value = {};
          }
        },
        b = (p) => {
          const m = new Map();
          if (Ne(p)) return m;
          for (const c of p)
            m.has(c.week) ? m.get(c.week).push(c) : m.set(c.week, [c]);
          return new Map([...m].sort((c, R) => c[0] - R[0]));
        },
        A = E(new Map()),
        B = async () => {
          const p = await Be(o.value.id);
          A.value = b(p);
        },
        r = (p) => {
          const m = p.target;
          m.src = Ye;
        };
      ve(() => {
        Q(
          Pe([o.value.code]).then((p) => ((F.value = p), p)),
          {}
        ),
          Q(
            qe([o.value.id]).then((p) => ((a.value = p), p)),
            {}
          );
      });
      const { hasLogin: P, userInfo: j } = Ce(),
        _ = se([]),
        re = () => {
          switch (
            (_.push({ label: "route.resource", canClick: !1 }), +f.fromType)
          ) {
            case k.resourceCaptureCourse:
              _.push({
                label: "route.resourceCourse",
                canClick: !0,
                clickHandler: () => v.push({ name: "resource-course" }),
              });
              break;
            case k.topicCaptureCourse:
              _.push({
                label: "topic.index",
                canClick: !0,
                clickHandler: () => v.push({ name: "resource-topic" }),
              }),
                _.push({
                  label: "topic.detail",
                  canClick: !0,
                  clickHandler: () =>
                    v.push({
                      name: "topicDetail",
                      params: {
                        fromType: C.query.topicDetailFromType,
                        id: C.query.topicId,
                      },
                      query: C.query,
                    }),
                });
              break;
            case k.myCaptureCourse:
              _.push({
                label: "myCapture",
                canClick: !0,
                clickHandler: () => v.push({ name: "user-capture" }),
              });
              break;
            case k.fullTextSearchCaptureCourse:
              _.splice(0),
                _.push({
                  label: "fullTextSearch.title",
                  canClick: !0,
                  clickHandler: () => {
                    v.push({ name: "fullTextSearch", query: C.query });
                  },
                });
              break;
            case k.collectCaptureCourse:
              _.splice(0),
                _.push({
                  label: "resourceDetail.favorites",
                  canClick: !0,
                  clickHandler: () => {
                    v.push({
                      name: "userCollectCourse",
                      params: { uid: C.query.uid },
                      query: C.query,
                    });
                  },
                });
              break;
            case k.userCaptureCourse:
              _.push({
                label: "captureCourse",
                canClick: !0,
                clickHandler: () => {
                  v.push({
                    name: "userCaptureCourse",
                    params: { uid: C.query.uid },
                    query: C.query,
                  });
                },
              });
              break;
            default:
              _.push({
                label: "capture",
                canClick: !0,
                clickHandler: () => v.push({ name: "capture" }),
              });
          }
          _.push({ label: o.value.name, canClick: !1 });
        },
        {
          isCollected: W,
          handleClickCollection: ne,
          initUserCollection: ce,
          collectedCount: le,
        } = je(Ue, Me, He);
      return (
        ye(async () => {
          await V(),
            await B(),
            P.value && (await Le(o.value.id), await ce(o.value.id)),
            re();
        }),
        (p, m) => {
          const c = we,
            R = Ie,
            H = be,
            I = ae,
            D = oe,
            G = O;
          return (
            n(),
            $(ge, null, {
              tabs: h(() => [
                e("div", yt, [
                  e("div", kt, [
                    u(
                      R,
                      { separator: "/", class: "pt-12px pb-24px font-normal" },
                      {
                        default: h(() => [
                          (n(!0),
                          l(
                            M,
                            null,
                            U(
                              t(_),
                              (x) => (
                                n(),
                                $(
                                  c,
                                  {
                                    key: x.label,
                                    onClick: () =>
                                      x.clickHandler ? x.clickHandler() : null,
                                  },
                                  {
                                    default: h(() => [
                                      e(
                                        "span",
                                        {
                                          class: N([
                                            {
                                              "hover:cursor-pointer hover:text-primary":
                                                x.canClick,
                                            },
                                            "font-normal text-sm text-t3",
                                          ]),
                                        },
                                        s(t(i)(x.label)),
                                        3
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["onClick"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                    e("div", Nt, [
                      e("div", bt, [
                        e(
                          "img",
                          {
                            src: F.value[o.value.code] || T(),
                            class: "w-82 h-47 rounded-lg",
                            onError: r,
                          },
                          null,
                          40,
                          It
                        ),
                        e(
                          "span",
                          {
                            class: N([
                              "absolute top-2 left-0 text-white text-xs rounded-r-xl py-1 px-2",
                              {
                                "bg-[#20BEC8]": o.value.status === "INPROGRESS",
                                "bg-w2": o.value.status === "UPCOMING",
                                "bg-t2": o.value.status === "END",
                              },
                            ]),
                          },
                          s(
                            t(i)(`courseStatus.${o.value.status.toLowerCase()}`)
                          ),
                          3
                        ),
                      ]),
                      e("div", wt, [
                        e("div", gt, [
                          e("div", Dt, [
                            e("span", Et, s(o.value.name), 1),
                            o.value.id
                              ? (n(),
                                $(
                                  H,
                                  {
                                    key: 0,
                                    "refer-id": o.value.id,
                                    "refer-type": "captureCourse",
                                  },
                                  null,
                                  8,
                                  ["refer-id"]
                                ))
                              : S("", !0),
                          ]),
                          e("div", St, [
                            e("div", $t, [
                              e(
                                "label",
                                Tt,
                                s(t(i)("liveFilter.semester")) + ":",
                                1
                              ),
                              u(
                                I,
                                { content: o.value.academic },
                                {
                                  default: h(() => [
                                    e("span", At, s(o.value.academic), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["content"]
                              ),
                              u(D, { direction: "vertical" }),
                            ]),
                            o.value.department
                              ? (n(),
                                l("div", Rt, [
                                  e(
                                    "label",
                                    Gt,
                                    s(t(i)("liveFilter.department")) + ":",
                                    1
                                  ),
                                  u(
                                    I,
                                    { content: o.value.department },
                                    {
                                      default: h(() => [
                                        e("span", Ot, s(o.value.department), 1),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["content"]
                                  ),
                                  u(D, { direction: "vertical" }),
                                ]))
                              : S("", !0),
                            t(q) && o.value.teachingClassName
                              ? (n(),
                                l("div", Lt, [
                                  e(
                                    "label",
                                    Ft,
                                    s(t(i)("liveFilter.teachingClassName")) +
                                      ":",
                                    1
                                  ),
                                  u(
                                    I,
                                    { content: o.value.teachingClassName },
                                    {
                                      default: h(() => [
                                        e(
                                          "span",
                                          Vt,
                                          s(o.value.teachingClassName),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["content"]
                                  ),
                                  u(D, { direction: "vertical" }),
                                ]))
                              : S("", !0),
                            e(
                              "span",
                              null,
                              s(t(i)("courseDetail.startDate")) +
                                ": " +
                                s(o.value.startTime),
                              1
                            ),
                          ]),
                          o.value.location
                            ? (n(),
                              l("div", Bt, [
                                e(
                                  "span",
                                  null,
                                  s(t(i)("courseDetail.location")) +
                                    ": " +
                                    s(o.value.location),
                                  1
                                ),
                              ]))
                            : S("", !0),
                        ]),
                        e("div", Pt, [
                          e(
                            "div",
                            Ht,
                            s(t(X)(a.value[o.value.id] || 0)) +
                              " " +
                              s(t(i)("resourceDetail.view")),
                            1
                          ),
                          e("div", Mt, [
                            t(w)
                              ? (n(),
                                l("div", Ut, [
                                  e(
                                    "div",
                                    {
                                      class: N([
                                        "flex items-center h-8 py-5px text-t4 hover:text-primary cursor-pointer",
                                        { "text-primary": t(W) },
                                      ]),
                                      onClick:
                                        m[0] ||
                                        (m[0] = (x) => t(ne)(o.value.id)),
                                    },
                                    [
                                      u(
                                        G,
                                        {
                                          icon: t(W) ? "collected" : "collect",
                                          class: "mr-0.75",
                                        },
                                        null,
                                        8,
                                        ["icon"]
                                      ),
                                      e(
                                        "div",
                                        qt,
                                        s(
                                          t(W)
                                            ? t(i)("favorited")
                                            : t(i)("favorite")
                                        ) +
                                          " (" +
                                          s(t(X)(t(le))) +
                                          ") ",
                                        1
                                      ),
                                    ],
                                    2
                                  ),
                                ]))
                              : S("", !0),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              content: h(() => [
                e("div", jt, [
                  e("div", Wt, [
                    e("div", zt, [
                      Yt,
                      y(" " + s(t(i)("courseDetail.content")), 1),
                    ]),
                    A.value.size > 0
                      ? (n(),
                        l("div", Kt, [
                          (n(!0),
                          l(
                            M,
                            null,
                            U(
                              A.value,
                              ([x, z]) => (
                                n(),
                                $(
                                  Ct,
                                  {
                                    key: x,
                                    week: x,
                                    schedules: z,
                                    "from-type": +L.fromType,
                                    class: "mb-16px",
                                  },
                                  null,
                                  8,
                                  ["week", "schedules", "from-type"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (n(),
                        l("div", Zt, [
                          u(G, {
                            icon: "no-capture-course",
                            class: "block w-198px h-198px mx-auto mt-150px",
                          }),
                          e("div", Jt, [
                            y(s(t(i)("courseTips.noCoursePrefix")) + " “", 1),
                            e(
                              "span",
                              Qt,
                              s(t(i)("courseDetail.captureContent")),
                              1
                            ),
                            y(
                              '" ' + s(t(i)("courseDetail.noContentSuffix")),
                              1
                            ),
                          ]),
                        ])),
                  ]),
                  e("div", Xt, [
                    e("div", es, [
                      ts,
                      y(" " + s(t(i)("courseDetail.instructor")), 1),
                    ]),
                    (n(!0),
                    l(
                      M,
                      null,
                      U(o.value.instructors, (x, z) => {
                        var Y;
                        return (
                          n(),
                          l(
                            "div",
                            {
                              key: z,
                              class:
                                "ml-24px flex mb-24px mt-24px h-25px items-center",
                            },
                            [
                              e(
                                "img",
                                {
                                  src:
                                    ((Y = g.value[x.userNo]) == null
                                      ? void 0
                                      : Y.small) || t(Ae),
                                  class: "h-24px w-24px rounded-full",
                                },
                                null,
                                8,
                                ss
                              ),
                              u(
                                I,
                                { content: x.username },
                                {
                                  default: h(() => [
                                    e("span", os, s(x.username), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["content"]
                              ),
                            ]
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  });
export { ko as default };
