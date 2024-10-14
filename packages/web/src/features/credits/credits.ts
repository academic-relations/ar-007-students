enum RoleType {
  PM,
  APM_FE,
  APM_BE,
  member,
  intern,
}

export interface Member {
  nickname: string;
  name: string;
  role: string;
  roleType: RoleType;
  comment?: string;
}

export interface SemesterCredit {
  semester: string;
  members: Member[];
}

const credits: SemesterCredit[] = [
  {
    semester: "🍁 2024년 가을",
    members: [
      {
        nickname: "eel",
        name: "최우정",
        role: "PM",
        roleType: RoleType.PM,
        comment: "eel",
      },
      {
        nickname: "chacha",
        name: "안채연",
        role: "FE",
        roleType: RoleType.member,
        comment: "chacha",
      },
      {
        nickname: "casio",
        name: "임가은",
        role: "FE",
        roleType: RoleType.member,
        comment: "casio",
      },
      {
        nickname: "malloc",
        name: "최지윤",
        role: "FE",
        roleType: RoleType.member,
        comment: "malloc",
      },
      {
        nickname: "mingle",
        name: "민지연",
        role: "BE",
        roleType: RoleType.member,
        comment: "mingle",
      },
      {
        nickname: "gb",
        name: "권혁원",
        role: "BE",
        roleType: RoleType.intern,
        comment: "gb",
      },
      {
        nickname: "dudu",
        name: "이연희",
        role: "Designer",
        roleType: RoleType.member,
        comment: "dudu",
      },
      {
        nickname: "somato",
        name: "장성원",
        role: "Designer",
        roleType: RoleType.member,
        comment: "somato",
      },
      {
        nickname: "siwon",
        name: "박정원",
        role: "Designer",
        roleType: RoleType.intern,
        comment: "siwon",
      },
    ],
  },
];

export default credits;
