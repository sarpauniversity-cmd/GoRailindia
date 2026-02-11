export interface TrainClass {
  price: number;
  seatsAvailable: number;
}

export interface Train {
  trainNumber: string;
  trainName: string;
  trainType: string;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  runningDays: string[];
  classes: Record<string, TrainClass>;
}

export const trainsData: Train[] = [
  {
    "trainNumber": "12759",
    "trainName": "Charminar Express",
    "trainType": "Mail",
    "source": "Hyderabad Decan (HYB)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "17:25",
    "arrivalTime": "05:25",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 8 },
      "2A": { "price": 1385, "seatsAvailable": 30 },
      "3A": { "price": 1010, "seatsAvailable": 46 },
      "SL": { "price": 420, "seatsAvailable": 170 }
    }
  },
  {
    "trainNumber": "12693",
    "trainName": "Pearl City Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Hyderabad Decan (HYB)",
    "departureTime": "20:00",
    "arrivalTime": "06:40",
    "duration": "10h 40m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2690, "seatsAvailable": 6 },
      "2A": { "price": 1345, "seatsAvailable": 32 },
      "3A": { "price": 980, "seatsAvailable": 48 },
      "SL": { "price": 410, "seatsAvailable": 174 }
    }
  },
  {
    "trainNumber": "12603",
    "trainName": "Hyderabad Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Kacheguda (KCG)",
    "departureTime": "17:50",
    "arrivalTime": "05:00",
    "duration": "11h 10m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2485, "seatsAvailable": 8 },
      "2A": { "price": 1520, "seatsAvailable": 34 },
      "3A": { "price": 1105, "seatsAvailable": 50 },
      "SL": { "price": 460, "seatsAvailable": 182 }
    }
  },
  {
    "trainNumber": "12733",
    "trainName": "Narayanadri Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "18:55",
    "arrivalTime": "06:00",
    "duration": "11h 05m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 32 },
      "3A": { "price": 1010, "seatsAvailable": 48 },
      "SL": { "price": 420, "seatsAvailable": 176 }
    }
  },
  {
    "trainNumber": "12764",
    "trainName": "Padmavathi Express",
    "trainType": "Mail",
    "source": "Kacheguda (KCG)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "06:00",
    "arrivalTime": "16:15",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2570, "seatsAvailable": 6 },
      "2A": { "price": 1285, "seatsAvailable": 28 },
      "3A": { "price": 940, "seatsAvailable": 44 },
      "SL": { "price": 390, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "22440",
    "trainName": "Secunderabad Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Secunderabad Junction (SC)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "05:45",
    "arrivalTime": "13:30",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2430, "seatsAvailable": 16 },
      "CC": { "price": 1295, "seatsAvailable": 62 }
    }
  },
  {
    "trainNumber": "12728",
    "trainName": "Godavari Express",
    "trainType": "Mail",
    "source": "Hyderabad Decan (HYB)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "17:45",
    "arrivalTime": "05:40",
    "duration": "11h 55m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2970, "seatsAvailable": 6 },
      "2A": { "price": 1485, "seatsAvailable": 30 },
      "3A": { "price": 1085, "seatsAvailable": 46 },
      "SL": { "price": 450, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "12830",
    "trainName": "Visakha Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "18:30",
    "arrivalTime": "08:15",
    "duration": "13h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3370, "seatsAvailable": 8 },
      "2A": { "price": 1685, "seatsAvailable": 32 },
      "3A": { "price": 1230, "seatsAvailable": 48 },
      "SL": { "price": 515, "seatsAvailable": 178 }
    }
  },
  {
    "trainNumber": "18464",
    "trainName": "Prasanthi Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Puttaparthi (PTPI)",
    "departureTime": "21:30",
    "arrivalTime": "06:15",
    "duration": "8h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2280, "seatsAvailable": 4 },
      "2A": { "price": 1140, "seatsAvailable": 28 },
      "3A": { "price": 830, "seatsAvailable": 42 },
      "SL": { "price": 345, "seatsAvailable": 164 }
    }
  },
  {
    "trainNumber": "17643",
    "trainName": "Circar Express",
    "trainType": "Mail",
    "source": "Kakinada Town (CCT)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "19:30",
    "arrivalTime": "06:45",
    "duration": "11h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 30 },
      "3A": { "price": 1010, "seatsAvailable": 46 },
      "SL": { "price": 420, "seatsAvailable": 170 }
    }
  },
  {
    "trainNumber": "12760",
    "trainName": "Nellore Express",
    "trainType": "Mail",
    "source": "Nellore (NLR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "20:45",
    "arrivalTime": "03:30",
    "duration": "6h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 1970, "seatsAvailable": 6 },
      "2A": { "price": 985, "seatsAvailable": 34 },
      "3A": { "price": 720, "seatsAvailable": 50 },
      "SL": { "price": 300, "seatsAvailable": 186 }
    }
  },
  {
    "trainNumber": "12863",
    "trainName": "Howrah Express",
    "trainType": "Mail",
    "source": "Tirupati (TPTY)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "09:30",
    "arrivalTime": "16:00",
    "duration": "30h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5880, "seatsAvailable": 8 },
      "2A": { "price": 2940, "seatsAvailable": 28 },
      "3A": { "price": 2140, "seatsAvailable": 44 },
      "SL": { "price": 895, "seatsAvailable": 162 }
    }
  },
  {
    "trainNumber": "12785",
    "trainName": "Kochuveli Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Kochuveli (KCVL)",
    "departureTime": "16:40",
    "arrivalTime": "12:30",
    "duration": "19h 50m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4480, "seatsAvailable": 8 },
      "2A": { "price": 2240, "seatsAvailable": 30 },
      "3A": { "price": 1630, "seatsAvailable": 46 },
      "SL": { "price": 680, "seatsAvailable": 170 }
    }
  },
  {
    "trainNumber": "12783",
    "trainName": "Vasco Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Vasco Da Gama (VSG)",
    "departureTime": "20:15",
    "arrivalTime": "15:30",
    "duration": "19h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4370, "seatsAvailable": 6 },
      "2A": { "price": 2185, "seatsAvailable": 28 },
      "3A": { "price": 1590, "seatsAvailable": 44 },
      "SL": { "price": 665, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "17406",
    "trainName": "Krishna Express",
    "trainType": "Mail",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "21:15",
    "arrivalTime": "06:00",
    "duration": "8h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2370, "seatsAvailable": 6 },
      "2A": { "price": 1185, "seatsAvailable": 32 },
      "3A": { "price": 865, "seatsAvailable": 48 },
      "SL": { "price": 360, "seatsAvailable": 176 }
    }
  },
  {
    "trainNumber": "12710",
    "trainName": "Simhapuri Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "07:30",
    "arrivalTime": "16:45",
    "duration": "9h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2370, "seatsAvailable": 6 },
      "2A": { "price": 1185, "seatsAvailable": 30 },
      "3A": { "price": 865, "seatsAvailable": 46 },
      "SL": { "price": 360, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "17488",
    "trainName": "Tirumala Express",
    "trainType": "Mail",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "05:45",
    "arrivalTime": "12:30",
    "duration": "6h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 1970, "seatsAvailable": 6 },
      "2A": { "price": 985, "seatsAvailable": 34 },
      "3A": { "price": 720, "seatsAvailable": 50 },
      "SL": { "price": 300, "seatsAvailable": 184 }
    }
  },
  {
    "trainNumber": "12793",
    "trainName": "Rayalaseema Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "06:15",
    "arrivalTime": "17:00",
    "duration": "10h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 32 },
      "3A": { "price": 1010, "seatsAvailable": 48 },
      "SL": { "price": 420, "seatsAvailable": 178 }
    }
  },
  {
    "trainNumber": "18047",
    "trainName": "Amaravathi Express",
    "trainType": "Mail",
    "source": "Hyderabad Decan (HYB)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "17:50",
    "arrivalTime": "05:30",
    "duration": "35h 40m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 6480, "seatsAvailable": 8 },
      "2A": { "price": 3240, "seatsAvailable": 28 },
      "3A": { "price": 2360, "seatsAvailable": 44 },
      "SL": { "price": 985, "seatsAvailable": 164 }
    }
  },
  {
    "trainNumber": "12739",
    "trainName": "Garibrath Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "20:45",
    "arrivalTime": "07:30",
    "duration": "10h 45m",
    "runningDays": ["Mon", "Wed", "Fri"],
    "classes": {
      "3A": { "price": 1085, "seatsAvailable": 72 },
      "SL": { "price": 450, "seatsAvailable": 200 }
    }
  },
  {
    "trainNumber": "12621",
    "trainName": "Tamil Nadu Express",
    "trainType": "Mail",
    "source": "New Delhi (NDLS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "22:30",
    "arrivalTime": "07:05",
    "duration": "32h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4320, "seatsAvailable": 8 },
      "2A": { "price": 2640, "seatsAvailable": 30 },
      "3A": { "price": 1925, "seatsAvailable": 46 },
      "SL": { "price": 805, "seatsAvailable": 178 }
    }
  },
  {
    "trainNumber": "12639",
    "trainName": "Brindavan Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "07:10",
    "arrivalTime": "13:30",
    "duration": "6h 20m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2290, "seatsAvailable": 6 },
      "2A": { "price": 1145, "seatsAvailable": 38 },
      "3A": { "price": 835, "seatsAvailable": 52 },
      "SL": { "price": 350, "seatsAvailable": 185 }
    }
  },
  {
    "trainNumber": "12657",
    "trainName": "Chennai Mail",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "21:15",
    "arrivalTime": "05:00",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2480, "seatsAvailable": 6 },
      "2A": { "price": 1240, "seatsAvailable": 32 },
      "3A": { "price": 905, "seatsAvailable": 46 },
      "SL": { "price": 375, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "12609",
    "trainName": "Bangalore Chennai Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "14:30",
    "arrivalTime": "21:15",
    "duration": "6h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2330, "seatsAvailable": 6 },
      "2A": { "price": 1165, "seatsAvailable": 36 },
      "3A": { "price": 850, "seatsAvailable": 50 },
      "SL": { "price": 355, "seatsAvailable": 190 }
    }
  },
  {
    "trainNumber": "12676",
    "trainName": "Kovai Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "06:35",
    "arrivalTime": "14:15",
    "duration": "7h 40m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2570, "seatsAvailable": 8 },
      "2A": { "price": 1285, "seatsAvailable": 36 },
      "3A": { "price": 940, "seatsAvailable": 52 },
      "SL": { "price": 390, "seatsAvailable": 192 }
    }
  },
  {
    "trainNumber": "12671",
    "trainName": "Nagercoil Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "13:45",
    "arrivalTime": "02:30",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3280, "seatsAvailable": 8 },
      "2A": { "price": 1640, "seatsAvailable": 32 },
      "3A": { "price": 1195, "seatsAvailable": 48 },
      "SL": { "price": 500, "seatsAvailable": 178 }
    }
  },
  {
    "trainNumber": "12633",
    "trainName": "Kanyakumari Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "21:05",
    "arrivalTime": "09:30",
    "duration": "12h 25m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3250, "seatsAvailable": 8 },
      "2A": { "price": 1625, "seatsAvailable": 34 },
      "3A": { "price": 1185, "seatsAvailable": 50 },
      "SL": { "price": 495, "seatsAvailable": 184 }
    }
  },
  {
    "trainNumber": "12039",
    "trainName": "Kanyakumari Shatabdi Express",
    "trainType": "Shatabdi",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "06:20",
    "arrivalTime": "17:55",
    "duration": "11h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1875, "seatsAvailable": 20 },
      "CC": { "price": 985, "seatsAvailable": 58 }
    }
  },
  {
    "trainNumber": "12660",
    "trainName": "Gurudev Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "14:00",
    "arrivalTime": "17:30",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 1370, "seatsAvailable": 8 },
      "2A": { "price": 685, "seatsAvailable": 40 },
      "3A": { "price": 500, "seatsAvailable": 56 },
      "SL": { "price": 210, "seatsAvailable": 208 }
    }
  },
  {
    "trainNumber": "12689",
    "trainName": "Nagercoil Chennai Express",
    "trainType": "Mail",
    "source": "Nagercoil Junction (NCJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "19:30",
    "arrivalTime": "08:15",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3280, "seatsAvailable": 6 },
      "2A": { "price": 1640, "seatsAvailable": 30 },
      "3A": { "price": 1195, "seatsAvailable": 46 },
      "SL": { "price": 500, "seatsAvailable": 174 }
    }
  },
  {
    "trainNumber": "16128",
    "trainName": "Guruvayur Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Guruvayur (GUV)",
    "departureTime": "16:15",
    "arrivalTime": "07:40",
    "duration": "15h 25m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3570, "seatsAvailable": 6 },
      "2A": { "price": 1785, "seatsAvailable": 30 },
      "3A": { "price": 1300, "seatsAvailable": 44 },
      "SL": { "price": 540, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "12677",
    "trainName": "Ernakulam Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Ernakulam Junction (ERS)",
    "departureTime": "18:50",
    "arrivalTime": "06:30",
    "duration": "11h 40m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3080, "seatsAvailable": 8 },
      "2A": { "price": 1540, "seatsAvailable": 32 },
      "3A": { "price": 1125, "seatsAvailable": 48 },
      "SL": { "price": 470, "seatsAvailable": 180 }
    }
  },
  {
    "trainNumber": "12695",
    "trainName": "Trivandrum Mail",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "20:30",
    "arrivalTime": "09:15",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2685, "seatsAvailable": 10 },
      "2A": { "price": 1640, "seatsAvailable": 36 },
      "3A": { "price": 1195, "seatsAvailable": 52 },
      "SL": { "price": 495, "seatsAvailable": 188 }
    }
  },
  {
    "trainNumber": "12625",
    "trainName": "Kerala Express",
    "trainType": "Mail",
    "source": "New Delhi (NDLS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "11:15",
    "arrivalTime": "10:45",
    "duration": "47h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5985, "seatsAvailable": 9 },
      "2A": { "price": 3585, "seatsAvailable": 30 },
      "3A": { "price": 2605, "seatsAvailable": 46 },
      "SL": { "price": 1085, "seatsAvailable": 162 }
    }
  },
  {
    "trainNumber": "12623",
    "trainName": "Trivandrum Rajdhani Express",
    "trainType": "Rajdhani",
    "source": "New Delhi (NDLS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "11:00",
    "arrivalTime": "08:55",
    "duration": "45h 55m",
    "runningDays": ["Mon", "Wed", "Sat"],
    "classes": {
      "1A": { "price": 6540, "seatsAvailable": 8 },
      "2A": { "price": 3920, "seatsAvailable": 26 },
      "3A": { "price": 2845, "seatsAvailable": 42 }
    }
  },
  {
    "trainNumber": "12687",
    "trainName": "Mangala Lakshadweep Express",
    "trainType": "Mail",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Hazrat Nizamuddin (NZM)",
    "departureTime": "15:20",
    "arrivalTime": "11:35",
    "duration": "44h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5840, "seatsAvailable": 8 },
      "2A": { "price": 3485, "seatsAvailable": 28 },
      "3A": { "price": 2530, "seatsAvailable": 42 },
      "SL": { "price": 1055, "seatsAvailable": 156 }
    }
  },
  {
    "trainNumber": "16649",
    "trainName": "Parasuram Express",
    "trainType": "Mail",
    "source": "Mangalore Central (MAQ)",
    "destination": "Thiruvananthapuram Central (TVC)",
    "departureTime": "12:45",
    "arrivalTime": "06:30",
    "duration": "17h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4170, "seatsAvailable": 6 },
      "2A": { "price": 2085, "seatsAvailable": 28 },
      "3A": { "price": 1520, "seatsAvailable": 44 },
      "SL": { "price": 635, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "16605",
    "trainName": "Ernad Express",
    "trainType": "Mail",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Shoranur Junction (SRR)",
    "departureTime": "05:45",
    "arrivalTime": "08:15",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 970, "seatsAvailable": 8 },
      "2A": { "price": 485, "seatsAvailable": 42 },
      "3A": { "price": 355, "seatsAvailable": 58 },
      "SL": { "price": 150, "seatsAvailable": 216 }
    }
  },
  {
    "trainNumber": "16308",
    "trainName": "Kanniyakumari Express",
    "trainType": "Mail",
    "source": "Alappuzha (ALLP)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "07:15",
    "arrivalTime": "14:45",
    "duration": "7h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2370, "seatsAvailable": 6 },
      "2A": { "price": 1185, "seatsAvailable": 34 },
      "3A": { "price": 865, "seatsAvailable": 50 },
      "SL": { "price": 360, "seatsAvailable": 188 }
    }
  },
  {
    "trainNumber": "16791",
    "trainName": "Palakkad Express",
    "trainType": "Mail",
    "source": "Palakkad Junction (PGT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "19:00",
    "arrivalTime": "04:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 32 },
      "3A": { "price": 1010, "seatsAvailable": 48 },
      "SL": { "price": 420, "seatsAvailable": 180 }
    }
  },
  {
    "trainNumber": "12696",
    "trainName": "Trivandrum Chennai Mail",
    "trainType": "Mail",
    "source": "Trivandrum Central (TVC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "16:45",
    "arrivalTime": "05:30",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2685, "seatsAvailable": 9 },
      "2A": { "price": 1640, "seatsAvailable": 34 },
      "3A": { "price": 1195, "seatsAvailable": 50 },
      "SL": { "price": 495, "seatsAvailable": 184 }
    }
  },
  {
    "trainNumber": "16127",
    "trainName": "Guruvayur Chennai Express",
    "trainType": "Mail",
    "source": "Guruvayur (GUV)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "17:30",
    "arrivalTime": "09:00",
    "duration": "15h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3570, "seatsAvailable": 6 },
      "2A": { "price": 1785, "seatsAvailable": 28 },
      "3A": { "price": 1300, "seatsAvailable": 42 },
      "SL": { "price": 540, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "16361",
    "trainName": "Ernakulam Mumbai Express",
    "trainType": "Mail",
    "source": "Kochuveli (KCVL)",
    "destination": "Lokmanya Tilak Terminus (LTT)",
    "departureTime": "12:15",
    "arrivalTime": "13:50",
    "duration": "25h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5680, "seatsAvailable": 8 },
      "2A": { "price": 2840, "seatsAvailable": 28 },
      "3A": { "price": 2065, "seatsAvailable": 44 },
      "SL": { "price": 860, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "12685",
    "trainName": "Mangalore Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Mangalore Central (MAQ)",
    "departureTime": "21:40",
    "arrivalTime": "13:45",
    "duration": "16h 05m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3770, "seatsAvailable": 8 },
      "2A": { "price": 1885, "seatsAvailable": 30 },
      "3A": { "price": 1375, "seatsAvailable": 46 },
      "SL": { "price": 575, "seatsAvailable": 176 }
    }
  },
  {
    "trainNumber": "12686",
    "trainName": "Mangalore Chennai Express",
    "trainType": "Mail",
    "source": "Mangalore Central (MAQ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "17:00",
    "arrivalTime": "09:05",
    "duration": "16h 05m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3770, "seatsAvailable": 6 },
      "2A": { "price": 1885, "seatsAvailable": 28 },
      "3A": { "price": 1375, "seatsAvailable": 44 },
      "SL": { "price": 575, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "12665",
    "trainName": "Kannyakumari Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "19:30",
    "arrivalTime": "10:45",
    "duration": "15h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3590, "seatsAvailable": 6 },
      "2A": { "price": 1795, "seatsAvailable": 28 },
      "3A": { "price": 1305, "seatsAvailable": 44 },
      "SL": { "price": 545, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "12507",
    "trainName": "Aronai Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "22:10",
    "arrivalTime": "11:50",
    "duration": "13h 40m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3370, "seatsAvailable": 6 },
      "2A": { "price": 1685, "seatsAvailable": 28 },
      "3A": { "price": 1230, "seatsAvailable": 44 },
      "SL": { "price": 515, "seatsAvailable": 166 }
    }
  },
  {
    "trainNumber": "20607",
    "trainName": "Mysuru Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Krantivira Sangolli Rayanna (SBC)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "06:00",
    "arrivalTime": "08:55",
    "duration": "2h 55m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1425, "seatsAvailable": 22 },
      "CC": { "price": 755, "seatsAvailable": 68 }
    }
  },
  {
    "trainNumber": "20635",
    "trainName": "Chennai Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "05:45",
    "arrivalTime": "13:15",
    "duration": "7h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2605, "seatsAvailable": 18 },
      "CC": { "price": 1385, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "22625",
    "trainName": "Tirunelveli Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "05:30",
    "arrivalTime": "15:30",
    "duration": "10h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 3175, "seatsAvailable": 16 },
      "CC": { "price": 1685, "seatsAvailable": 56 }
    }
  },
  {
    "trainNumber": "12644",
    "trainName": "Thirukural Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tuticorin (TN)",
    "departureTime": "22:00",
    "arrivalTime": "08:45",
    "duration": "10h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2880, "seatsAvailable": 8 },
      "2A": { "price": 1440, "seatsAvailable": 32 },
      "3A": { "price": 1050, "seatsAvailable": 48 },
      "SL": { "price": 440, "seatsAvailable": 176 }
    }
  },
  {
    "trainNumber": "12653",
    "trainName": "Rockfort Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "20:40",
    "arrivalTime": "05:00",
    "duration": "8h 20m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2370, "seatsAvailable": 8 },
      "2A": { "price": 1185, "seatsAvailable": 34 },
      "3A": { "price": 865, "seatsAvailable": 50 },
      "SL": { "price": 360, "seatsAvailable": 186 }
    }
  },
  {
    "trainNumber": "12635",
    "trainName": "Vaigai Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "12:40",
    "arrivalTime": "20:25",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1385, "seatsAvailable": 26 },
      "CC": { "price": 725, "seatsAvailable": 78 }
    }
  },
  {
    "trainNumber": "12667",
    "trainName": "Coimbatore Nagercoil Express",
    "trainType": "Mail",
    "source": "Coimbatore Junction (CBE)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "21:45",
    "arrivalTime": "06:30",
    "duration": "8h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2570, "seatsAvailable": 6 },
      "2A": { "price": 1285, "seatsAvailable": 30 },
      "3A": { "price": 940, "seatsAvailable": 46 },
      "SL": { "price": 390, "seatsAvailable": 174 }
    }
  },
  {
    "trainNumber": "12634",
    "trainName": "Kanyakumari Chennai Express",
    "trainType": "Mail",
    "source": "Kanyakumari (CAPE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "15:55",
    "arrivalTime": "04:20",
    "duration": "12h 25m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3250, "seatsAvailable": 6 },
      "2A": { "price": 1625, "seatsAvailable": 30 },
      "3A": { "price": 1185, "seatsAvailable": 46 },
      "SL": { "price": 495, "seatsAvailable": 180 }
    }
  },
  {
    "trainNumber": "16339",
    "trainName": "Nagarcoil Mangalore Express",
    "trainType": "Mail",
    "source": "Mangalore Central (MAQ)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "08:50",
    "arrivalTime": "06:00",
    "duration": "21h 10m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4770, "seatsAvailable": 6 },
      "2A": { "price": 2385, "seatsAvailable": 28 },
      "3A": { "price": 1735, "seatsAvailable": 42 },
      "SL": { "price": 725, "seatsAvailable": 164 }
    }
  },
  {
    "trainNumber": "16527",
    "trainName": "Kanniyakumari Bangalore Express",
    "trainType": "Mail",
    "source": "Yesvantpur Junction (YPR)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "22:15",
    "arrivalTime": "12:00",
    "duration": "13h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3480, "seatsAvailable": 6 },
      "2A": { "price": 1740, "seatsAvailable": 30 },
      "3A": { "price": 1265, "seatsAvailable": 46 },
      "SL": { "price": 530, "seatsAvailable": 174 }
    }
  },
  {
    "trainNumber": "12628",
    "trainName": "Karnataka Express",
    "trainType": "Mail",
    "source": "New Delhi (NDLS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "18:15",
    "arrivalTime": "06:30",
    "duration": "36h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4685, "seatsAvailable": 7 },
      "2A": { "price": 2860, "seatsAvailable": 28 },
      "3A": { "price": 2085, "seatsAvailable": 44 },
      "SL": { "price": 870, "seatsAvailable": 158 }
    }
  },
  {
    "trainNumber": "17229",
    "trainName": "Sabari Express",
    "trainType": "Mail",
    "source": "Hyderabad Decan (HYB)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "14:50",
    "arrivalTime": "08:15",
    "duration": "17h 25m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4080, "seatsAvailable": 6 },
      "2A": { "price": 2040, "seatsAvailable": 28 },
      "3A": { "price": 1485, "seatsAvailable": 44 },
      "SL": { "price": 620, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "12615",
    "trainName": "Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "New Delhi (NDLS)",
    "departureTime": "19:15",
    "arrivalTime": "05:25",
    "duration": "34h 10m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4485, "seatsAvailable": 9 },
      "2A": { "price": 2740, "seatsAvailable": 32 },
      "3A": { "price": 1995, "seatsAvailable": 48 },
      "SL": { "price": 830, "seatsAvailable": 164 }
    }
  },
  {
    "trainNumber": "12841",
    "trainName": "Coromandel Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "08:40",
    "arrivalTime": "14:45",
    "duration": "30h 05m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3840, "seatsAvailable": 8 },
      "2A": { "price": 2350, "seatsAvailable": 30 },
      "3A": { "price": 1710, "seatsAvailable": 46 },
      "SL": { "price": 715, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "22647",
    "trainName": "Tiruchirappalli Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "06:00",
    "arrivalTime": "13:45",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2415, "seatsAvailable": 18 },
      "CC": { "price": 1285, "seatsAvailable": 62 }
    }
  },
  {
    "trainNumber": "22707",
    "trainName": "Tirupati Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Secunderabad Junction (SC)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "05:30",
    "arrivalTime": "15:45",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2985, "seatsAvailable": 16 },
      "CC": { "price": 1585, "seatsAvailable": 58 }
    }
  },
  {
    "trainNumber": "20653",
    "trainName": "Trivandrum Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Trivandrum Central (TVC)",
    "destination": "Kasaragod (KGQ)",
    "departureTime": "05:25",
    "arrivalTime": "11:00",
    "duration": "5h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1865, "seatsAvailable": 20 },
      "CC": { "price": 985, "seatsAvailable": 66 }
    }
  },
  {
    "trainNumber": "12618",
    "trainName": "Mangala Express",
    "trainType": "Mail",
    "source": "Hazrat Nizamuddin (NZM)",
    "destination": "Mangalore Central (MAQ)",
    "departureTime": "20:55",
    "arrivalTime": "06:00",
    "duration": "33h 05m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4385, "seatsAvailable": 8 },
      "2A": { "price": 2680, "seatsAvailable": 30 },
      "3A": { "price": 1950, "seatsAvailable": 46 },
      "SL": { "price": 815, "seatsAvailable": 168 }
    }
  },
  {
    "trainNumber": "12691",
    "trainName": "Pondicherry Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Puducherry (PDY)",
    "departureTime": "15:30",
    "arrivalTime": "22:45",
    "duration": "7h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2170, "seatsAvailable": 6 },
      "2A": { "price": 1085, "seatsAvailable": 34 },
      "3A": { "price": 795, "seatsAvailable": 50 },
      "SL": { "price": 330, "seatsAvailable": 188 }
    }
  },
  {
    "trainNumber": "16229",
    "trainName": "Mysore Express",
    "trainType": "Mail",
    "source": "Mysore Junction (MYS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "21:00",
    "arrivalTime": "06:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2680, "seatsAvailable": 6 },
      "2A": { "price": 1340, "seatsAvailable": 32 },
      "3A": { "price": 975, "seatsAvailable": 48 },
      "SL": { "price": 405, "seatsAvailable": 180 }
    }
  },
  {
    "trainNumber": "16535",
    "trainName": "Gol Gumbaz Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Solapur (SUR)",
    "departureTime": "07:30",
    "arrivalTime": "20:15",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3080, "seatsAvailable": 6 },
      "2A": { "price": 1540, "seatsAvailable": 30 },
      "3A": { "price": 1125, "seatsAvailable": 46 },
      "SL": { "price": 470, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "16591",
    "trainName": "Hampi Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Hubli Junction (UBL)",
    "departureTime": "20:15",
    "arrivalTime": "06:15",
    "duration": "10h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2570, "seatsAvailable": 6 },
      "2A": { "price": 1285, "seatsAvailable": 32 },
      "3A": { "price": 940, "seatsAvailable": 48 },
      "SL": { "price": 390, "seatsAvailable": 178 }
    }
  },
  {
    "trainNumber": "17326",
    "trainName": "Vishwamanava Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Yesvantpur Junction (YPR)",
    "departureTime": "21:00",
    "arrivalTime": "08:00",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 30 },
      "3A": { "price": 1010, "seatsAvailable": 46 },
      "SL": { "price": 420, "seatsAvailable": 174 }
    }
  },
  {
    "trainNumber": "16022",
    "trainName": "Kaveri Express",
    "trainType": "Mail",
    "source": "Mysore Junction (MYS)",
    "destination": "Mayiladuthurai Junction (MV)",
    "departureTime": "10:30",
    "arrivalTime": "21:00",
    "duration": "10h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2770, "seatsAvailable": 6 },
      "2A": { "price": 1385, "seatsAvailable": 30 },
      "3A": { "price": 1010, "seatsAvailable": 46 },
      "SL": { "price": 420, "seatsAvailable": 176 }
    }
  },
  {
    "trainNumber": "12608",
    "trainName": "Lalbagh Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "06:00",
    "arrivalTime": "12:15",
    "duration": "6h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2290, "seatsAvailable": 6 },
      "2A": { "price": 1145, "seatsAvailable": 36 },
      "3A": { "price": 835, "seatsAvailable": 52 },
      "SL": { "price": 350, "seatsAvailable": 192 }
    }
  },
  {
    "trainNumber": "16381",
    "trainName": "Kanyakumari Bangalore Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "17:15",
    "arrivalTime": "08:30",
    "duration": "15h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3590, "seatsAvailable": 6 },
      "2A": { "price": 1795, "seatsAvailable": 30 },
      "3A": { "price": 1305, "seatsAvailable": 46 },
      "SL": { "price": 545, "seatsAvailable": 172 }
    }
  },
  {
    "trainNumber": "12681",
    "trainName": "Coimbatore Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "21:25",
    "arrivalTime": "05:15",
    "duration": "7h 50m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2570, "seatsAvailable": 8 },
      "2A": { "price": 1285, "seatsAvailable": 34 },
      "3A": { "price": 940, "seatsAvailable": 50 },
      "SL": { "price": 390, "seatsAvailable": 188 }
    }
  },
  {
    "trainNumber": "12674",
    "trainName": "Cheran Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "11:45",
    "arrivalTime": "18:30",
    "duration": "6h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 2170, "seatsAvailable": 8 },
      "2A": { "price": 1085, "seatsAvailable": 36 },
      "3A": { "price": 795, "seatsAvailable": 52 },
      "SL": { "price": 330, "seatsAvailable": 194 }
    }
  },
  {
    "trainNumber": "20803",
    "trainName": "Hubballi Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Bangalore City (SBC)",
    "destination": "Dharwad (DWR)",
    "departureTime": "05:30",
    "arrivalTime": "14:00",
    "duration": "8h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2785, "seatsAvailable": 16 },
      "CC": { "price": 1485, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "22882",
    "trainName": "Ernakulam Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Thiruvananthapuram Central (TVC)",
    "departureTime": "06:00",
    "arrivalTime": "10:30",
    "duration": "4h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1675, "seatsAvailable": 22 },
      "CC": { "price": 885, "seatsAvailable": 70 }
    }
  },
  {
    "trainNumber": "22817",
    "trainName": "Vizag Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Visakhapatnam (VSKP)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "14:45",
    "arrivalTime": "22:15",
    "duration": "7h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2430, "seatsAvailable": 18 },
      "CC": { "price": 1295, "seatsAvailable": 64 }
    }
  },
  {
    "trainNumber": "16382",
    "trainName": "Cape Kanniyakumari Bangalore Express",
    "trainType": "Mail",
    "source": "Kanyakumari (CAPE)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "20:00",
    "arrivalTime": "11:15",
    "duration": "15h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 3590, "seatsAvailable": 6 },
      "2A": { "price": 1795, "seatsAvailable": 28 },
      "3A": { "price": 1305, "seatsAvailable": 44 },
      "SL": { "price": 545, "seatsAvailable": 168 }
    }
  },
  // ================= CHENNAI ↔ TIRUPATI =================
  {
    "trainNumber": "20677",
    "trainName": "Chennai Tirupati Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "05:30",
    "arrivalTime": "07:05",
    "duration": "1h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "16057",
    "trainName": "Sapthagiri Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "06:30",
    "arrivalTime": "09:50",
    "duration": "3h 20m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 620, "seatsAvailable": 60 },
      "SL": { "price": 230, "seatsAvailable": 120 },
      "2S": { "price": 120, "seatsAvailable": 80 }
    }
  },
  {
    "trainNumber": "22158",
    "trainName": "MS CSMT Superfast",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "06:45",
    "arrivalTime": "09:15",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 950, "seatsAvailable": 40 },
      "3A": { "price": 650, "seatsAvailable": 60 },
      "SL": { "price": 240, "seatsAvailable": 100 }
    }
  },
  {
    "trainNumber": "16053",
    "trainName": "MAS TPTY Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "14:40",
    "arrivalTime": "17:50",
    "duration": "3h 10m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 610, "seatsAvailable": 58 },
      "SL": { "price": 220, "seatsAvailable": 110 },
      "2S": { "price": 115, "seatsAvailable": 90 }
    }
  },
  {
    "trainNumber": "12164",
    "trainName": "MAS LTT Superfast",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "18:25",
    "arrivalTime": "20:45",
    "duration": "2h 20m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 980, "seatsAvailable": 38 },
      "3A": { "price": 670, "seatsAvailable": 55 },
      "SL": { "price": 245, "seatsAvailable": 95 }
    }
  },
  {
    "trainNumber": "20678",
    "trainName": "Tirupati Chennai Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "16:00",
    "arrivalTime": "17:35",
    "duration": "1h 35m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "16058",
    "trainName": "Sapthagiri Express (Return)",
    "trainType": "Mail",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "17:30",
    "arrivalTime": "20:50",
    "duration": "3h 20m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 620, "seatsAvailable": 60 },
      "SL": { "price": 230, "seatsAvailable": 120 },
      "2S": { "price": 120, "seatsAvailable": 80 }
    }
  },
  // ================= CHENNAI ↔ NELLORE =================
  {
    "trainNumber": "12295",
    "trainName": "Sanghamitra Superfast",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "07:15",
    "arrivalTime": "10:30",
    "duration": "3h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 255, "seatsAvailable": 100 }
    }
  },
  {
    "trainNumber": "12761",
    "trainName": "Charminar Express (Chennai-Nellore)",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "21:30",
    "arrivalTime": "01:15",
    "duration": "3h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 720, "seatsAvailable": 70 },
      "SL": { "price": 260, "seatsAvailable": 110 }
    }
  },
  // ================= CHENNAI ↔ GUDUR =================
  {
    "trainNumber": "16059",
    "trainName": "Sapthagiri Express (Chennai-Gudur)",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "06:30",
    "arrivalTime": "09:00",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 60 },
      "SL": { "price": 220, "seatsAvailable": 120 },
      "2S": { "price": 110, "seatsAvailable": 90 }
    }
  },
  {
    "trainNumber": "12616",
    "trainName": "Grand Trunk Express (Chennai-Gudur)",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "19:15",
    "arrivalTime": "22:00",
    "duration": "2h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 680, "seatsAvailable": 60 },
      "SL": { "price": 250, "seatsAvailable": 100 }
    }
  },
  {
    "trainNumber": "16060",
    "trainName": "Sapthagiri Express (Gudur-Chennai)",
    "trainType": "Mail",
    "source": "Gudur Junction (GDR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "20:30",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 60 },
      "SL": { "price": 220, "seatsAvailable": 120 },
      "2S": { "price": 110, "seatsAvailable": 90 }
    }
  },
  // ================= CHENNAI ↔ PUDUCHERRY =================
  {
    "trainNumber": "16115",
    "trainName": "MS PDY Express",
    "trainType": "Mail",
    "source": "Chennai Egmore (MS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "06:10",
    "arrivalTime": "09:40",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 610, "seatsAvailable": 60 },
      "SL": { "price": 230, "seatsAvailable": 120 },
      "2S": { "price": 120, "seatsAvailable": 100 }
    }
  },
  {
    "trainNumber": "20605",
    "trainName": "Chennai Puducherry Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "06:00",
    "arrivalTime": "08:30",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1350, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "16116",
    "trainName": "PDY MS Express",
    "trainType": "Mail",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Egmore (MS)",
    "departureTime": "15:30",
    "arrivalTime": "19:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 610, "seatsAvailable": 60 },
      "SL": { "price": 230, "seatsAvailable": 120 },
      "2S": { "price": 120, "seatsAvailable": 100 }
    }
  },
  {
    "trainNumber": "20606",
    "trainName": "Puducherry Chennai Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "17:00",
    "arrivalTime": "19:30",
    "duration": "2h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1350, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  // ================= MAS ↔ TPTY (Additional Routes) =================
  {
    "trainNumber": "20677A",
    "trainName": "MAS-TPTY Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615A",
    "trainName": "MAS-TPTY Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760A",
    "trainName": "MAS-TPTY Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19001",
    "trainName": "MAS-TPTY Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Tirupati (TPTY)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // TPTY to MAS
  {
    "trainNumber": "20677B",
    "trainName": "TPTY-MAS Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615B",
    "trainName": "TPTY-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760B",
    "trainName": "TPTY-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19002",
    "trainName": "TPTY-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Tirupati (TPTY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // ================= MAS ↔ NLR (Nellore) =================
  {
    "trainNumber": "20677C",
    "trainName": "MAS-NLR Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615C",
    "trainName": "MAS-NLR Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760C",
    "trainName": "MAS-NLR Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19003",
    "trainName": "MAS-NLR Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Nellore (NLR)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // NLR to MAS
  {
    "trainNumber": "20677D",
    "trainName": "NLR-MAS Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Nellore (NLR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615D",
    "trainName": "NLR-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Nellore (NLR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760D",
    "trainName": "NLR-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Nellore (NLR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19004",
    "trainName": "NLR-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Nellore (NLR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // ================= MAS ↔ GDR (Gudur) =================
  {
    "trainNumber": "20677E",
    "trainName": "MAS-GDR Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615E",
    "trainName": "MAS-GDR Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760E",
    "trainName": "MAS-GDR Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19005",
    "trainName": "MAS-GDR Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Gudur Junction (GDR)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // GDR to MAS
  {
    "trainNumber": "20677F",
    "trainName": "GDR-MAS Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Gudur Junction (GDR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615F",
    "trainName": "GDR-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Gudur Junction (GDR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760F",
    "trainName": "GDR-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Gudur Junction (GDR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19006",
    "trainName": "GDR-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Gudur Junction (GDR)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // ================= MAS ↔ PDY (Puducherry) Additional =================
  {
    "trainNumber": "20677G",
    "trainName": "MAS-PDY Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615G",
    "trainName": "MAS-PDY Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760G",
    "trainName": "MAS-PDY Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19007",
    "trainName": "MAS-PDY Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Puducherry (PDY)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // PDY to MAS Additional
  {
    "trainNumber": "20677H",
    "trainName": "PDY-MAS Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615H",
    "trainName": "PDY-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760H",
    "trainName": "PDY-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19008",
    "trainName": "PDY-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Puducherry (PDY)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // ================= MAS ↔ SBC (Bangalore) =================
  {
    "trainNumber": "20677I",
    "trainName": "MAS-SBC Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615I",
    "trainName": "MAS-SBC Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760I",
    "trainName": "MAS-SBC Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19009",
    "trainName": "MAS-SBC Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Bangalore City (SBC)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // SBC to MAS
  {
    "trainNumber": "20677J",
    "trainName": "SBC-MAS Vande Bharat",
    "trainType": "Vande Bharat",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12615J",
    "trainName": "SBC-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 40 },
      "3A": { "price": 700, "seatsAvailable": 60 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12760J",
    "trainName": "SBC-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 38 },
      "3A": { "price": 680, "seatsAvailable": 55 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19010",
    "trainName": "SBC-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Bangalore City (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },

  // ================= SBC ↔ MAS (Bangalore to Chennai) Additional =================
  {
    "trainNumber": "20680",
    "trainName": "SBC-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "KSR Bengaluru (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:00",
    "duration": "3h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12617",
    "trainName": "SBC-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "KSR Bengaluru (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 45 },
      "3A": { "price": 700, "seatsAvailable": 70 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12761",
    "trainName": "SBC-MAS Charminar Express",
    "trainType": "Mail",
    "source": "KSR Bengaluru (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 40 },
      "3A": { "price": 680, "seatsAvailable": 65 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19011",
    "trainName": "SBC-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "KSR Bengaluru (SBC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },

  // ================= MAS ↔ MYS (Chennai to Mysore) =================
  {
    "trainNumber": "20681",
    "trainName": "MAS-MYS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1650, "seatsAvailable": 30 },
      "CC": { "price": 850, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12618",
    "trainName": "MAS-MYS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "06:45",
    "arrivalTime": "18:00",
    "duration": "11h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1250, "seatsAvailable": 45 },
      "3A": { "price": 850, "seatsAvailable": 70 },
      "SL": { "price": 320, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12762",
    "trainName": "MAS-MYS Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "18:00",
    "arrivalTime": "07:00",
    "duration": "13h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 40 },
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 300, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19012",
    "trainName": "MAS-MYS Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Mysuru Junction (MYS)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 720, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 130 }
    }
  },

  // MYS to MAS (Mysore to Chennai)
  {
    "trainNumber": "20682",
    "trainName": "MYS-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Mysuru Junction (MYS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1650, "seatsAvailable": 30 },
      "CC": { "price": 850, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12619",
    "trainName": "MYS-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Mysuru Junction (MYS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "18:00",
    "duration": "11h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1250, "seatsAvailable": 45 },
      "3A": { "price": 850, "seatsAvailable": 70 },
      "SL": { "price": 320, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12763",
    "trainName": "MYS-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Mysuru Junction (MYS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "07:00",
    "duration": "13h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 40 },
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 300, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19013",
    "trainName": "MYS-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Mysuru Junction (MYS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 720, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 130 }
    }
  },

  // ================= MAS ↔ CBE (Chennai to Coimbatore) =================
  {
    "trainNumber": "20683",
    "trainName": "MAS-CBE Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1650, "seatsAvailable": 30 },
      "CC": { "price": 850, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12620",
    "trainName": "MAS-CBE Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "06:45",
    "arrivalTime": "17:45",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1250, "seatsAvailable": 45 },
      "3A": { "price": 850, "seatsAvailable": 70 },
      "SL": { "price": 320, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12764A",
    "trainName": "MAS-CBE Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "18:00",
    "arrivalTime": "06:30",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 40 },
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 300, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19014",
    "trainName": "MAS-CBE Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Coimbatore Junction (CBE)",
    "departureTime": "13:00",
    "arrivalTime": "00:00",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 720, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 130 }
    }
  },

  // CBE to MAS (Coimbatore to Chennai)
  {
    "trainNumber": "20684",
    "trainName": "CBE-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Coimbatore Junction (CBE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1650, "seatsAvailable": 30 },
      "CC": { "price": 850, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12621A",
    "trainName": "CBE-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Coimbatore Junction (CBE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "17:45",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1250, "seatsAvailable": 45 },
      "3A": { "price": 850, "seatsAvailable": 70 },
      "SL": { "price": 320, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12765",
    "trainName": "CBE-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Coimbatore Junction (CBE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:30",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 40 },
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 300, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19015",
    "trainName": "CBE-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Coimbatore Junction (CBE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "00:00",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 720, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 130 }
    }
  },

  // ================= MAS ↔ MDU (Chennai to Madurai) =================
  {
    "trainNumber": "20685",
    "trainName": "MAS-MDU Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "05:30",
    "arrivalTime": "10:15",
    "duration": "4h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1550, "seatsAvailable": 30 },
      "CC": { "price": 800, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12622",
    "trainName": "MAS-MDU Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "06:45",
    "arrivalTime": "17:00",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 45 },
      "3A": { "price": 800, "seatsAvailable": 70 },
      "SL": { "price": 300, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12766",
    "trainName": "MAS-MDU Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "18:00",
    "arrivalTime": "05:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1100, "seatsAvailable": 40 },
      "3A": { "price": 750, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19016",
    "trainName": "MAS-MDU Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Madurai Junction (MDU)",
    "departureTime": "13:00",
    "arrivalTime": "23:15",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 680, "seatsAvailable": 65 },
      "SL": { "price": 260, "seatsAvailable": 130 }
    }
  },

  // MDU to MAS (Madurai to Chennai)
  {
    "trainNumber": "20686",
    "trainName": "MDU-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Madurai Junction (MDU)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "10:15",
    "duration": "4h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1550, "seatsAvailable": 30 },
      "CC": { "price": 800, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12623A",
    "trainName": "MDU-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Madurai Junction (MDU)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "17:00",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1180, "seatsAvailable": 45 },
      "3A": { "price": 800, "seatsAvailable": 70 },
      "SL": { "price": 300, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12767",
    "trainName": "MDU-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Madurai Junction (MDU)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "05:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1100, "seatsAvailable": 40 },
      "3A": { "price": 750, "seatsAvailable": 65 },
      "SL": { "price": 280, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19017",
    "trainName": "MDU-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Madurai Junction (MDU)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "23:15",
    "duration": "10h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 680, "seatsAvailable": 65 },
      "SL": { "price": 260, "seatsAvailable": 130 }
    }
  },

  // ================= MAS ↔ TPJ (Chennai to Tiruchirappalli) =================
  {
    "trainNumber": "20687",
    "trainName": "MAS-TPJ Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "05:30",
    "arrivalTime": "09:30",
    "duration": "4h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1350, "seatsAvailable": 30 },
      "CC": { "price": 700, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12624",
    "trainName": "MAS-TPJ Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "06:45",
    "arrivalTime": "14:30",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 45 },
      "3A": { "price": 680, "seatsAvailable": 70 },
      "SL": { "price": 250, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12768",
    "trainName": "MAS-TPJ Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "18:00",
    "arrivalTime": "03:00",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 950, "seatsAvailable": 40 },
      "3A": { "price": 640, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19018",
    "trainName": "MAS-TPJ Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Tiruchirappalli Junction (TPJ)",
    "departureTime": "13:00",
    "arrivalTime": "21:00",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 580, "seatsAvailable": 65 },
      "SL": { "price": 220, "seatsAvailable": 130 }
    }
  },

  // TPJ to MAS (Tiruchirappalli to Chennai)
  {
    "trainNumber": "20688",
    "trainName": "TPJ-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Tiruchirappalli Junction (TPJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:30",
    "duration": "4h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1350, "seatsAvailable": 30 },
      "CC": { "price": 700, "seatsAvailable": 65 }
    }
  },
  {
    "trainNumber": "12625A",
    "trainName": "TPJ-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Tiruchirappalli Junction (TPJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "14:30",
    "duration": "7h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 45 },
      "3A": { "price": 680, "seatsAvailable": 70 },
      "SL": { "price": 250, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12769",
    "trainName": "TPJ-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Tiruchirappalli Junction (TPJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "03:00",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 950, "seatsAvailable": 40 },
      "3A": { "price": 640, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19019",
    "trainName": "TPJ-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Tiruchirappalli Junction (TPJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "21:00",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 580, "seatsAvailable": 65 },
      "SL": { "price": 220, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ TIRUNELVELI (669 km) =================
  // MAS to TEN
  {
    "trainNumber": "20689",
    "trainName": "MAS-TEN Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "05:30",
    "arrivalTime": "14:30",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1850, "seatsAvailable": 30 },
      "CC": { "price": 950, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12626",
    "trainName": "MAS-TEN Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "06:45",
    "arrivalTime": "19:30",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 45 },
      "3A": { "price": 900, "seatsAvailable": 70 },
      "SL": { "price": 360, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12770",
    "trainName": "MAS-TEN Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "18:00",
    "arrivalTime": "08:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1300, "seatsAvailable": 40 },
      "3A": { "price": 880, "seatsAvailable": 65 },
      "SL": { "price": 350, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19020",
    "trainName": "MAS-TEN Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Tirunelveli (TEN)",
    "departureTime": "13:00",
    "arrivalTime": "02:30",
    "duration": "13h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 330, "seatsAvailable": 130 }
    }
  },
  // TEN to MAS
  {
    "trainNumber": "20690",
    "trainName": "TEN-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Tirunelveli (TEN)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "14:30",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1850, "seatsAvailable": 30 },
      "CC": { "price": 950, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12627",
    "trainName": "TEN-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Tirunelveli (TEN)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "19:30",
    "duration": "12h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 45 },
      "3A": { "price": 900, "seatsAvailable": 70 },
      "SL": { "price": 360, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12771",
    "trainName": "TEN-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Tirunelveli (TEN)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "08:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1300, "seatsAvailable": 40 },
      "3A": { "price": 880, "seatsAvailable": 65 },
      "SL": { "price": 350, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19021",
    "trainName": "TEN-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Tirunelveli (TEN)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "02:30",
    "duration": "13h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 330, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ NAGERCOIL (706 km) =================
  // MAS to NCJ
  {
    "trainNumber": "20691",
    "trainName": "MAS-NCJ Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "05:30",
    "arrivalTime": "15:00",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1900, "seatsAvailable": 30 },
      "CC": { "price": 980, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12628A",
    "trainName": "MAS-NCJ Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "06:45",
    "arrivalTime": "20:00",
    "duration": "13h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1400, "seatsAvailable": 45 },
      "3A": { "price": 920, "seatsAvailable": 70 },
      "SL": { "price": 380, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12772",
    "trainName": "MAS-NCJ Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "18:00",
    "arrivalTime": "08:30",
    "duration": "14h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 40 },
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 370, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19022",
    "trainName": "MAS-NCJ Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Nagercoil Junction (NCJ)",
    "departureTime": "13:00",
    "arrivalTime": "03:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 850, "seatsAvailable": 65 },
      "SL": { "price": 350, "seatsAvailable": 130 }
    }
  },
  // NCJ to MAS
  {
    "trainNumber": "20692",
    "trainName": "NCJ-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Nagercoil Junction (NCJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "15:00",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1900, "seatsAvailable": 30 },
      "CC": { "price": 980, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12629",
    "trainName": "NCJ-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Nagercoil Junction (NCJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "20:00",
    "duration": "13h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1400, "seatsAvailable": 45 },
      "3A": { "price": 920, "seatsAvailable": 70 },
      "SL": { "price": 380, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12773",
    "trainName": "NCJ-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Nagercoil Junction (NCJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "08:30",
    "duration": "14h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 40 },
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 370, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19023",
    "trainName": "NCJ-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Nagercoil Junction (NCJ)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "03:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 850, "seatsAvailable": 65 },
      "SL": { "price": 350, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ KANYAKUMARI (739 km) =================
  // MAS to CAPE
  {
    "trainNumber": "20693",
    "trainName": "MAS-CAPE Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "05:30",
    "arrivalTime": "15:30",
    "duration": "10h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1980, "seatsAvailable": 30 },
      "CC": { "price": 1020, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12630",
    "trainName": "MAS-CAPE Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "06:45",
    "arrivalTime": "20:30",
    "duration": "13h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 45 },
      "3A": { "price": 950, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12774",
    "trainName": "MAS-CAPE Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "18:00",
    "arrivalTime": "09:00",
    "duration": "15h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1400, "seatsAvailable": 40 },
      "3A": { "price": 930, "seatsAvailable": 65 },
      "SL": { "price": 390, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19024",
    "trainName": "MAS-CAPE Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Kanyakumari (CAPE)",
    "departureTime": "13:00",
    "arrivalTime": "03:30",
    "duration": "14h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 880, "seatsAvailable": 65 },
      "SL": { "price": 370, "seatsAvailable": 130 }
    }
  },
  // CAPE to MAS
  {
    "trainNumber": "20694",
    "trainName": "CAPE-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Kanyakumari (CAPE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "15:30",
    "duration": "10h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1980, "seatsAvailable": 30 },
      "CC": { "price": 1020, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12631",
    "trainName": "CAPE-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Kanyakumari (CAPE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "20:30",
    "duration": "13h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 45 },
      "3A": { "price": 950, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12775",
    "trainName": "CAPE-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Kanyakumari (CAPE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "09:00",
    "duration": "15h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1400, "seatsAvailable": 40 },
      "3A": { "price": 930, "seatsAvailable": 65 },
      "SL": { "price": 390, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19025",
    "trainName": "CAPE-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Kanyakumari (CAPE)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "03:30",
    "duration": "14h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 880, "seatsAvailable": 65 },
      "SL": { "price": 370, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ HYDERABAD (716 km) =================
  // MAS to HYB
  {
    "trainNumber": "20695",
    "trainName": "MAS-HYB Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Hyderabad Deccan (HYB)",
    "departureTime": "05:30",
    "arrivalTime": "13:30",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2000, "seatsAvailable": 30 },
      "CC": { "price": 1050, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12632",
    "trainName": "MAS-HYB Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Hyderabad Deccan (HYB)",
    "departureTime": "06:45",
    "arrivalTime": "18:45",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 980, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12776",
    "trainName": "MAS-HYB Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Hyderabad Deccan (HYB)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19026",
    "trainName": "MAS-HYB Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Hyderabad Deccan (HYB)",
    "departureTime": "13:00",
    "arrivalTime": "01:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },
  // HYB to MAS
  {
    "trainNumber": "20696",
    "trainName": "HYB-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Hyderabad Deccan (HYB)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "13:30",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2000, "seatsAvailable": 30 },
      "CC": { "price": 1050, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12633A",
    "trainName": "HYB-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Hyderabad Deccan (HYB)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "18:45",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 980, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12777",
    "trainName": "HYB-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Hyderabad Deccan (HYB)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19027",
    "trainName": "HYB-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Hyderabad Deccan (HYB)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "01:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ SECUNDERABAD (714 km) =================
  // MAS to SC
  {
    "trainNumber": "20697",
    "trainName": "MAS-SC Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "05:30",
    "arrivalTime": "13:30",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2000, "seatsAvailable": 30 },
      "CC": { "price": 1050, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12634A",
    "trainName": "MAS-SC Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "06:45",
    "arrivalTime": "18:45",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 980, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12778",
    "trainName": "MAS-SC Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19028",
    "trainName": "MAS-SC Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Secunderabad Junction (SC)",
    "departureTime": "13:00",
    "arrivalTime": "01:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },
  // SC to MAS
  {
    "trainNumber": "20698",
    "trainName": "SC-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Secunderabad Junction (SC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "13:30",
    "duration": "8h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2000, "seatsAvailable": 30 },
      "CC": { "price": 1050, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12635A",
    "trainName": "SC-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "18:45",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 980, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12779",
    "trainName": "SC-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Secunderabad Junction (SC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19029",
    "trainName": "SC-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Secunderabad Junction (SC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "01:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ VIJAYAWADA (394 km) =================
  // MAS to BZA
  {
    "trainNumber": "20699",
    "trainName": "MAS-BZA Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Vijayawada Junction (BZA)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12636",
    "trainName": "MAS-BZA Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Vijayawada Junction (BZA)",
    "departureTime": "06:45",
    "arrivalTime": "13:15",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 45 },
      "3A": { "price": 700, "seatsAvailable": 70 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12780",
    "trainName": "MAS-BZA Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Vijayawada Junction (BZA)",
    "departureTime": "18:00",
    "arrivalTime": "00:30",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 40 },
      "3A": { "price": 680, "seatsAvailable": 65 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19030",
    "trainName": "MAS-BZA Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Vijayawada Junction (BZA)",
    "departureTime": "13:00",
    "arrivalTime": "19:30",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },
  // BZA to MAS
  {
    "trainNumber": "20700",
    "trainName": "BZA-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "10:30",
    "duration": "5h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1450, "seatsAvailable": 30 },
      "CC": { "price": 750, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12637",
    "trainName": "BZA-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "13:15",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1050, "seatsAvailable": 45 },
      "3A": { "price": 700, "seatsAvailable": 70 },
      "SL": { "price": 260, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12781",
    "trainName": "BZA-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "00:30",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1000, "seatsAvailable": 40 },
      "3A": { "price": 680, "seatsAvailable": 65 },
      "SL": { "price": 250, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19031",
    "trainName": "BZA-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Vijayawada Junction (BZA)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "19:30",
    "duration": "6h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 600, "seatsAvailable": 65 },
      "SL": { "price": 230, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ VISAKHAPATNAM (781 km) =================
  // MAS to VSKP
  {
    "trainNumber": "20701",
    "trainName": "MAS-VSKP Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "05:30",
    "arrivalTime": "14:00",
    "duration": "8h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2200, "seatsAvailable": 30 },
      "CC": { "price": 1150, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12638",
    "trainName": "MAS-VSKP Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "06:45",
    "arrivalTime": "19:15",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1650, "seatsAvailable": 45 },
      "3A": { "price": 1100, "seatsAvailable": 70 },
      "SL": { "price": 450, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12782",
    "trainName": "MAS-VSKP Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "18:00",
    "arrivalTime": "08:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1600, "seatsAvailable": 40 },
      "3A": { "price": 1050, "seatsAvailable": 65 },
      "SL": { "price": 420, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19032",
    "trainName": "MAS-VSKP Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Visakhapatnam (VSKP)",
    "departureTime": "13:00",
    "arrivalTime": "02:30",
    "duration": "13h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1000, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 130 }
    }
  },
  // VSKP to MAS
  {
    "trainNumber": "20702",
    "trainName": "VSKP-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Visakhapatnam (VSKP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "14:00",
    "duration": "8h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2200, "seatsAvailable": 30 },
      "CC": { "price": 1150, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12639A",
    "trainName": "VSKP-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Visakhapatnam (VSKP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "19:15",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1650, "seatsAvailable": 45 },
      "3A": { "price": 1100, "seatsAvailable": 70 },
      "SL": { "price": 450, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12783A",
    "trainName": "VSKP-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Visakhapatnam (VSKP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "08:00",
    "duration": "14h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1600, "seatsAvailable": 40 },
      "3A": { "price": 1050, "seatsAvailable": 65 },
      "SL": { "price": 420, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19033",
    "trainName": "VSKP-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Visakhapatnam (VSKP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "02:30",
    "duration": "13h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1000, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ ERNAKULAM (687 km) =================
  // MAS to ERS
  {
    "trainNumber": "20703",
    "trainName": "MAS-ERS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Ernakulam Junction (ERS)",
    "departureTime": "05:30",
    "arrivalTime": "13:00",
    "duration": "7h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2050, "seatsAvailable": 30 },
      "CC": { "price": 1080, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12640",
    "trainName": "MAS-ERS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Ernakulam Junction (ERS)",
    "departureTime": "06:45",
    "arrivalTime": "17:45",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 1000, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12784",
    "trainName": "MAS-ERS Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Ernakulam Junction (ERS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19034",
    "trainName": "MAS-ERS Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Ernakulam Junction (ERS)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 360, "seatsAvailable": 130 }
    }
  },
  // ERS to MAS
  {
    "trainNumber": "20704",
    "trainName": "ERS-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "13:00",
    "duration": "7h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2050, "seatsAvailable": 30 },
      "CC": { "price": 1080, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12641",
    "trainName": "ERS-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "17:45",
    "duration": "11h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 45 },
      "3A": { "price": 1000, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12785A",
    "trainName": "ERS-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "06:00",
    "duration": "12h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1450, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19035",
    "trainName": "ERS-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Ernakulam Junction (ERS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 360, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ TRIVANDRUM (764 km) =================
  // MAS to TVC
  {
    "trainNumber": "20705",
    "trainName": "MAS-TVC Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "05:30",
    "arrivalTime": "14:30",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2150, "seatsAvailable": 30 },
      "CC": { "price": 1120, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12642",
    "trainName": "MAS-TVC Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "06:45",
    "arrivalTime": "19:15",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1600, "seatsAvailable": 45 },
      "3A": { "price": 1050, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12786",
    "trainName": "MAS-TVC Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "18:00",
    "arrivalTime": "07:00",
    "duration": "13h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1550, "seatsAvailable": 40 },
      "3A": { "price": 1000, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19036",
    "trainName": "MAS-TVC Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Trivandrum Central (TVC)",
    "departureTime": "13:00",
    "arrivalTime": "01:30",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },
  // TVC to MAS
  {
    "trainNumber": "20706",
    "trainName": "TVC-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Trivandrum Central (TVC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "14:30",
    "duration": "9h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2150, "seatsAvailable": 30 },
      "CC": { "price": 1120, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12643",
    "trainName": "TVC-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Trivandrum Central (TVC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "19:15",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1600, "seatsAvailable": 45 },
      "3A": { "price": 1050, "seatsAvailable": 70 },
      "SL": { "price": 420, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12787",
    "trainName": "TVC-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Trivandrum Central (TVC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "07:00",
    "duration": "13h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1550, "seatsAvailable": 40 },
      "3A": { "price": 1000, "seatsAvailable": 65 },
      "SL": { "price": 400, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19037",
    "trainName": "TVC-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Trivandrum Central (TVC)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "01:30",
    "duration": "12h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ PALAKKAD (622 km) =================
  // MAS to PGT
  {
    "trainNumber": "20707",
    "trainName": "MAS-PGT Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Palakkad Junction (PGT)",
    "departureTime": "05:30",
    "arrivalTime": "15:00",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1850, "seatsAvailable": 30 },
      "CC": { "price": 950, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12644A",
    "trainName": "MAS-PGT Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Palakkad Junction (PGT)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 45 },
      "3A": { "price": 900, "seatsAvailable": 70 },
      "SL": { "price": 360, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12788",
    "trainName": "MAS-PGT Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Palakkad Junction (PGT)",
    "departureTime": "18:00",
    "arrivalTime": "03:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1300, "seatsAvailable": 40 },
      "3A": { "price": 850, "seatsAvailable": 65 },
      "SL": { "price": 340, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19038",
    "trainName": "MAS-PGT Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Palakkad Junction (PGT)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 320, "seatsAvailable": 130 }
    }
  },
  // PGT to MAS
  {
    "trainNumber": "20708",
    "trainName": "PGT-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Palakkad Junction (PGT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "15:00",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 1850, "seatsAvailable": 30 },
      "CC": { "price": 950, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12645",
    "trainName": "PGT-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Palakkad Junction (PGT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "16:30",
    "duration": "9h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1350, "seatsAvailable": 45 },
      "3A": { "price": 900, "seatsAvailable": 70 },
      "SL": { "price": 360, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12789",
    "trainName": "PGT-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Palakkad Junction (PGT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "03:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1300, "seatsAvailable": 40 },
      "3A": { "price": 850, "seatsAvailable": 65 },
      "SL": { "price": 340, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19039",
    "trainName": "PGT-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Palakkad Junction (PGT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "22:30",
    "duration": "9h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 800, "seatsAvailable": 65 },
      "SL": { "price": 320, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ ALAPPUZHA (720 km) =================
  // MAS to ALLP
  {
    "trainNumber": "20709",
    "trainName": "MAS-ALLP Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Alappuzha (ALLP)",
    "departureTime": "05:30",
    "arrivalTime": "17:00",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2100, "seatsAvailable": 30 },
      "CC": { "price": 1080, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12646",
    "trainName": "MAS-ALLP Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Alappuzha (ALLP)",
    "departureTime": "06:45",
    "arrivalTime": "18:30",
    "duration": "11h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1550, "seatsAvailable": 45 },
      "3A": { "price": 1000, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12790",
    "trainName": "MAS-ALLP Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Alappuzha (ALLP)",
    "departureTime": "18:00",
    "arrivalTime": "05:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19040",
    "trainName": "MAS-ALLP Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Alappuzha (ALLP)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 360, "seatsAvailable": 130 }
    }
  },
  // ALLP to MAS
  {
    "trainNumber": "20710",
    "trainName": "ALLP-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Alappuzha (ALLP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "17:00",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 2100, "seatsAvailable": 30 },
      "CC": { "price": 1080, "seatsAvailable": 60 }
    }
  },
  {
    "trainNumber": "12647",
    "trainName": "ALLP-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Alappuzha (ALLP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "18:30",
    "duration": "11h 45m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1550, "seatsAvailable": 45 },
      "3A": { "price": 1000, "seatsAvailable": 70 },
      "SL": { "price": 400, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12791",
    "trainName": "ALLP-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Alappuzha (ALLP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "05:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "2A": { "price": 1500, "seatsAvailable": 40 },
      "3A": { "price": 950, "seatsAvailable": 65 },
      "SL": { "price": 380, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19041",
    "trainName": "ALLP-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Alappuzha (ALLP)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "00:30",
    "duration": "11h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 900, "seatsAvailable": 65 },
      "SL": { "price": 360, "seatsAvailable": 130 }
    }
  },

  // ================= CHENNAI ↔ MUMBAI LTT (1280 km) =================
  // MAS to LTT
  {
    "trainNumber": "20711",
    "trainName": "MAS-LTT Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Lokmanya Tilak Terminus (LTT)",
    "departureTime": "05:30",
    "arrivalTime": "23:30",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 3200, "seatsAvailable": 25 },
      "CC": { "price": 1650, "seatsAvailable": 55 }
    }
  },
  {
    "trainNumber": "12648",
    "trainName": "MAS-LTT Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Lokmanya Tilak Terminus (LTT)",
    "departureTime": "06:45",
    "arrivalTime": "02:00",
    "duration": "19h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4200, "seatsAvailable": 8 },
      "2A": { "price": 2400, "seatsAvailable": 40 },
      "3A": { "price": 1600, "seatsAvailable": 65 },
      "SL": { "price": 650, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12792",
    "trainName": "MAS-LTT Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Lokmanya Tilak Terminus (LTT)",
    "departureTime": "18:00",
    "arrivalTime": "12:00",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4100, "seatsAvailable": 8 },
      "2A": { "price": 2350, "seatsAvailable": 38 },
      "3A": { "price": 1550, "seatsAvailable": 60 },
      "SL": { "price": 620, "seatsAvailable": 115 }
    }
  },
  {
    "trainNumber": "19042",
    "trainName": "MAS-LTT Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Lokmanya Tilak Terminus (LTT)",
    "departureTime": "13:00",
    "arrivalTime": "07:00",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1500, "seatsAvailable": 60 },
      "SL": { "price": 600, "seatsAvailable": 125 }
    }
  },
  // LTT to MAS
  {
    "trainNumber": "20712",
    "trainName": "LTT-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Lokmanya Tilak Terminus (LTT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "23:30",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 3200, "seatsAvailable": 25 },
      "CC": { "price": 1650, "seatsAvailable": 55 }
    }
  },
  {
    "trainNumber": "12649A",
    "trainName": "LTT-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Lokmanya Tilak Terminus (LTT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "02:00",
    "duration": "19h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4200, "seatsAvailable": 8 },
      "2A": { "price": 2400, "seatsAvailable": 40 },
      "3A": { "price": 1600, "seatsAvailable": 65 },
      "SL": { "price": 650, "seatsAvailable": 120 }
    }
  },
  {
    "trainNumber": "12793B",
    "trainName": "LTT-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Lokmanya Tilak Terminus (LTT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "12:00",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4100, "seatsAvailable": 8 },
      "2A": { "price": 2350, "seatsAvailable": 38 },
      "3A": { "price": 1550, "seatsAvailable": 60 },
      "SL": { "price": 620, "seatsAvailable": 115 }
    }
  },
  {
    "trainNumber": "19043",
    "trainName": "LTT-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Lokmanya Tilak Terminus (LTT)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "07:00",
    "duration": "18h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1500, "seatsAvailable": 60 },
      "SL": { "price": 600, "seatsAvailable": 125 }
    }
  },

  // ================= CHENNAI ↔ NEW DELHI (2180 km) =================
  // MAS to NDLS
  {
    "trainNumber": "20713",
    "trainName": "MAS-NDLS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "New Delhi (NDLS)",
    "departureTime": "05:30",
    "arrivalTime": "09:30",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 4500, "seatsAvailable": 20 },
      "CC": { "price": 2350, "seatsAvailable": 50 }
    }
  },
  {
    "trainNumber": "12650",
    "trainName": "MAS-NDLS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "New Delhi (NDLS)",
    "departureTime": "06:45",
    "arrivalTime": "12:00",
    "duration": "29h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5200, "seatsAvailable": 8 },
      "2A": { "price": 3200, "seatsAvailable": 35 },
      "3A": { "price": 2200, "seatsAvailable": 55 },
      "SL": { "price": 900, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "12794",
    "trainName": "MAS-NDLS Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "New Delhi (NDLS)",
    "departureTime": "18:00",
    "arrivalTime": "22:00",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5100, "seatsAvailable": 8 },
      "2A": { "price": 3100, "seatsAvailable": 32 },
      "3A": { "price": 2100, "seatsAvailable": 52 },
      "SL": { "price": 850, "seatsAvailable": 105 }
    }
  },
  {
    "trainNumber": "19044",
    "trainName": "MAS-NDLS Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "New Delhi (NDLS)",
    "departureTime": "13:00",
    "arrivalTime": "17:00",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 2000, "seatsAvailable": 50 },
      "SL": { "price": 800, "seatsAvailable": 100 }
    }
  },
  // NDLS to MAS
  {
    "trainNumber": "20714",
    "trainName": "NDLS-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "New Delhi (NDLS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "09:30",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 4500, "seatsAvailable": 20 },
      "CC": { "price": 2350, "seatsAvailable": 50 }
    }
  },
  {
    "trainNumber": "12651",
    "trainName": "NDLS-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "New Delhi (NDLS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "12:00",
    "duration": "29h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5200, "seatsAvailable": 8 },
      "2A": { "price": 3200, "seatsAvailable": 35 },
      "3A": { "price": 2200, "seatsAvailable": 55 },
      "SL": { "price": 900, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "12795",
    "trainName": "NDLS-MAS Charminar Express",
    "trainType": "Mail",
    "source": "New Delhi (NDLS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "22:00",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 5100, "seatsAvailable": 8 },
      "2A": { "price": 3100, "seatsAvailable": 32 },
      "3A": { "price": 2100, "seatsAvailable": 52 },
      "SL": { "price": 850, "seatsAvailable": 105 }
    }
  },
  {
    "trainNumber": "19045",
    "trainName": "NDLS-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "New Delhi (NDLS)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "17:00",
    "duration": "28h 00m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 2000, "seatsAvailable": 50 },
      "SL": { "price": 800, "seatsAvailable": 100 }
    }
  },

  // ================= CHENNAI ↔ HOWRAH (1659 km) =================
  // MAS to HWH
  {
    "trainNumber": "20715",
    "trainName": "MAS-HWH Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Chennai Central (MAS)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "05:30",
    "arrivalTime": "04:00",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 3800, "seatsAvailable": 22 },
      "CC": { "price": 1980, "seatsAvailable": 52 }
    }
  },
  {
    "trainNumber": "12652",
    "trainName": "MAS-HWH Grand Trunk Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "06:45",
    "arrivalTime": "06:00",
    "duration": "23h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4400, "seatsAvailable": 8 },
      "2A": { "price": 2800, "seatsAvailable": 36 },
      "3A": { "price": 1900, "seatsAvailable": 58 },
      "SL": { "price": 780, "seatsAvailable": 115 }
    }
  },
  {
    "trainNumber": "12796",
    "trainName": "MAS-HWH Charminar Express",
    "trainType": "Mail",
    "source": "Chennai Central (MAS)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "18:00",
    "arrivalTime": "16:30",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4300, "seatsAvailable": 8 },
      "2A": { "price": 2700, "seatsAvailable": 34 },
      "3A": { "price": 1850, "seatsAvailable": 55 },
      "SL": { "price": 750, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19046",
    "trainName": "MAS-HWH Superfast Express",
    "trainType": "Superfast",
    "source": "Chennai Central (MAS)",
    "destination": "Howrah Junction (HWH)",
    "departureTime": "13:00",
    "arrivalTime": "11:30",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1750, "seatsAvailable": 52 },
      "SL": { "price": 700, "seatsAvailable": 105 }
    }
  },
  // HWH to MAS
  {
    "trainNumber": "20716",
    "trainName": "HWH-MAS Vande Bharat Express",
    "trainType": "Vande Bharat",
    "source": "Howrah Junction (HWH)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "05:30",
    "arrivalTime": "04:00",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "EC": { "price": 3800, "seatsAvailable": 22 },
      "CC": { "price": 1980, "seatsAvailable": 52 }
    }
  },
  {
    "trainNumber": "12653A",
    "trainName": "HWH-MAS Grand Trunk Express",
    "trainType": "Mail",
    "source": "Howrah Junction (HWH)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "06:45",
    "arrivalTime": "06:00",
    "duration": "23h 15m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4400, "seatsAvailable": 8 },
      "2A": { "price": 2800, "seatsAvailable": 36 },
      "3A": { "price": 1900, "seatsAvailable": 58 },
      "SL": { "price": 780, "seatsAvailable": 115 }
    }
  },
  {
    "trainNumber": "12797",
    "trainName": "HWH-MAS Charminar Express",
    "trainType": "Mail",
    "source": "Howrah Junction (HWH)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "18:00",
    "arrivalTime": "16:30",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "1A": { "price": 4300, "seatsAvailable": 8 },
      "2A": { "price": 2700, "seatsAvailable": 34 },
      "3A": { "price": 1850, "seatsAvailable": 55 },
      "SL": { "price": 750, "seatsAvailable": 110 }
    }
  },
  {
    "trainNumber": "19047",
    "trainName": "HWH-MAS Superfast Express",
    "trainType": "Superfast",
    "source": "Howrah Junction (HWH)",
    "destination": "Chennai Central (MAS)",
    "departureTime": "13:00",
    "arrivalTime": "11:30",
    "duration": "22h 30m",
    "runningDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "classes": {
      "3A": { "price": 1750, "seatsAvailable": 52 },
      "SL": { "price": 700, "seatsAvailable": 105 }
    }
  }
];

// Extract unique stations from train data
export const getUniqueStations = (): string[] => {
  const stations = new Set<string>();
  trainsData.forEach(train => {
    stations.add(train.source);
    stations.add(train.destination);
  });
  return Array.from(stations).sort();
};

// Search trains by source and destination
export const searchTrains = (source: string, destination: string): Train[] => {
  const sourceKeyword = source.toLowerCase();
  const destKeyword = destination.toLowerCase();
  
  return trainsData.filter(train => {
    const sourceMatch = train.source.toLowerCase().includes(sourceKeyword);
    const destMatch = train.destination.toLowerCase().includes(destKeyword);
    return sourceMatch && destMatch;
  });
};

// Get all train types
export const getTrainTypes = (): string[] => {
  const types = new Set<string>();
  trainsData.forEach(train => types.add(train.trainType));
  return Array.from(types).sort();
};

// Get all available classes
export const getAllClasses = (): string[] => {
  const classes = new Set<string>();
  trainsData.forEach(train => {
    Object.keys(train.classes).forEach(cls => classes.add(cls));
  });
  // Sort in a specific order
  const classOrder = ['1A', '2A', '3A', 'SL', '2S', 'CC', 'EC'];
  return Array.from(classes).sort((a, b) => {
    const aIndex = classOrder.indexOf(a);
    const bIndex = classOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
};

// Get full class name
export const getClassFullName = (code: string): string => {
  const classNames: Record<string, string> = {
    '1A': 'First AC',
    '2A': 'AC 2 Tier',
    '3A': 'AC 3 Tier',
    'SL': 'Sleeper',
    '2S': 'Second Sitting',
    'CC': 'Chair Car',
    'EC': 'Executive Chair Car'
  };
  return classNames[code] || code;
};
