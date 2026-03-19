const tripData = {
  flights: [
    {
      id: "departure",
      type: "去程",
      flightNo: "AK1510",
      airline: "AirAsia 亞洲航空",
      date: "2026/04/04",
      departure: { airport: "桃園機場 (TPE) T1", time: "12:00" },
      arrival: { airport: "福岡機場 (FUK) T1", time: "15:20" },
      baggage: "手提 7kg*1 / 託運 20kg*1"
    },
    {
      id: "return",
      type: "回程",
      flightNo: "AK1511",
      airline: "AirAsia 亞洲航空",
      date: "2026/04/11",
      departure: { airport: "福岡機場 (FUK) T1", time: "16:20" },
      arrival: { airport: "桃園機場 (TPE) T1", time: "17:50" },
      baggage: "手提 7kg*1 / 託運 20kg*1"
    }
  ],
  hotels: [
    {
      id: "webase",
      name: "WeBase Hakata",
      nights: 1,
      checkInDate: "2026/04/04",
      checkOutDate: "2026/04/05",
      checkInTime: "16:00",
      checkOutTime: "11:00",
      location: "福岡 中洲川端",
      roomType: "雙層床私人房 (4人用)",
      meal: "含早餐 07:00-09:30"
    },
    {
      id: "croom",
      name: "博多祇園西鐵克魯姆酒店",
      nights: 2,
      checkInDate: "2026/04/05",
      checkOutDate: "2026/04/07",
      checkInTime: "15:00",
      checkOutTime: "11:00",
      location: "福岡 櫛田神社前",
      roomType: "住宅雙人房 (帶洗衣機與小廚房)",
      meal: "無早餐 06:30-10:00 (可加購)"
    },
    {
      id: "daiwa",
      name: "大和魯內酒店熊本銀座通PREMIER",
      nights: 2,
      checkInDate: "2026/04/07",
      checkOutDate: "2026/04/09",
      checkInTime: "14:00",
      checkOutTime: "11:00",
      location: "熊本 花畑町",
      roomType: "豪華特大床房",
      meal: "無早餐 06:30-10:00 (可加購)"
    },
    {
      id: "oriental",
      name: "福岡天神東方快捷酒店",
      nights: 2,
      checkInDate: "2026/04/09",
      checkOutDate: "2026/04/11",
      checkInTime: "15:00",
      checkOutTime: "11:00",
      location: "福岡 天神",
      roomType: "標準大床房",
      meal: "含早餐 07:00-10:30"
    }
  ],
  transport: {
    rentalCar: {
      reservationNo: "99944856900",
      location: "福岡市博多區東光1-4-10",
      time: "8:00 - 19:00"
    }
  },
  itinerary: [
    {
      day: 1,
      date: "2026/04/04 (六)",
      title: "出發與抵達福岡",
      activities: [
        { time: "12:00-15:20", desc: "桃園國際機場(TPE) -> 福岡國際機場(FUK)", type: "flight" },
        { time: "15:20-16:00", desc: "機場交通 -> WeBase Hakata", type: "transit" },
        { time: "16:00", desc: "Check-in: WeBase Hakata", type: "hotel" },
        { time: "17:00-22:00", desc: "天神市區, 屋台晚餐", type: "food" },
        { time: "22:00", desc: "休息 @ WeBase Hakata", type: "rest" }
      ]
    },
    {
      day: 2,
      date: "2026/04/05 (日)",
      title: "福岡市區觀光",
      activities: [
        { time: "07:00-09:30", desc: "早餐 @ WeBase Hakata", type: "food" },
        { time: "10:00-12:00", desc: "C/O -> 寄放行李 (西鐵克魯姆酒店)", type: "transit" },
        { time: "12:00-17:00", desc: "JWS FUKUOKA 2026 / 自由活動", type: "poi" },
        { time: "15:00-17:00", desc: "Check-in: 西鐵克魯姆酒店", type: "hotel" },
        { time: "17:00-22:00", desc: "天神市區, 屋台", type: "food" }
      ]
    }
  ]
};
