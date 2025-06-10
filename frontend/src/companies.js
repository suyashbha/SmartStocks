const stockList = [
  {
    "symbol": "360ONE",
    "name": "360 One Wam Ltd."
  },
  {
    "symbol": "3MINDIA",
    "name": "3M India Ltd."
  },
  {
    "symbol": "ABB",
    "name": "ABB India Ltd."
  },
  {
    "symbol": "ABBOTINDIA",
    "name": "Abbott India Ltd."
  },
  {
    "symbol": "ACC",
    "name": "ACC Ltd."
  },
  {
    "symbol": "ADANIENSOL",
    "name": "Adani Energy Solutions Ltd."
  },
  {
    "symbol": "ADANIENT",
    "name": "Adani Enterprises Ltd."
  },
  {
    "symbol": "ADANIGREEN",
    "name": "Adani Green Energy Ltd."
  },
  {
    "symbol": "ADANIPORTS",
    "name": "Adani Ports and Special Economic Zone Ltd."
  },
  {
    "symbol": "ADANIPOWER",
    "name": "Adani Power Ltd."
  },
  {
    "symbol": "ATGL",
    "name": "Adani Total Gas Ltd."
  },
  {
    "symbol": "ABCAPITAL",
    "name": "Aditya Birla Capital Ltd."
  },
  {
    "symbol": "AIAENG",
    "name": "AIA Engineering Ltd."
  },
  {
    "symbol": "AJANTPHARM",
    "name": "Ajanta Pharma Ltd."
  },
  {
    "symbol": "ALKEM",
    "name": "Alkem Laboratories Ltd."
  },
  {
    "symbol": "AMBUJACEM",
    "name": "Ambuja Cements Ltd."
  },
  {
    "symbol": "APARINDS",
    "name": "Apar Industries Ltd."
  },
  {
    "symbol": "APLAPOLLO",
    "name": "APL Apollo Tubes Ltd."
  },
  {
    "symbol": "APOLLOHOSP",
    "name": "Apollo Hospitals Enterprise Ltd."
  },
  {
    "symbol": "ASHOKLEY",
    "name": "Ashok Leyland Ltd."
  },
  {
    "symbol": "ASIANPAINT",
    "name": "Asian Paints Ltd."
  },
  {
    "symbol": "ASTRAL",
    "name": "Astral Ltd."
  },
  {
    "symbol": "AUBANK",
    "name": "AU Small Finance Bank Ltd."
  },
  {
    "symbol": "AUROPHARMA",
    "name": "Aurobindo Pharma Ltd."
  },
  {
    "symbol": "AIIL",
    "name": "Authum Investment & Infrastructure Ltd."
  },
  {
    "symbol": "DMART",
    "name": "Avenue Supermarts Ltd."
  },
  {
    "symbol": "AWL",
    "name": "AWL Agri Business Ltd."
  },
  {
    "symbol": "AXISBANK",
    "name": "Axis Bank Ltd."
  },
  {
    "symbol": "BAJAJ-AUTO",
    "name": "Bajaj Auto Ltd."
  },
  {
    "symbol": "BAJFINANCE",
    "name": "Bajaj Finance Ltd."
  },
  {
    "symbol": "BAJAJFINSV",
    "name": "Bajaj Finserv Ltd."
  },
  {
    "symbol": "BAJAJHLDNG",
    "name": "Bajaj Holdings & Investment Ltd."
  },
  {
    "symbol": "BAJAJHFL",
    "name": "Bajaj Housing Finance Ltd."
  },
  {
    "symbol": "BALKRISIND",
    "name": "Balkrishna Industries Ltd."
  },
  {
    "symbol": "BANKBARODA",
    "name": "Bank Of Baroda"
  },
  {
    "symbol": "BANKINDIA",
    "name": "Bank Of India"
  },
  {
    "symbol": "MAHABANK",
    "name": "Bank Of Maharashtra"
  },
  {
    "symbol": "BERGEPAINT",
    "name": "Berger Paints India Ltd."
  },
  {
    "symbol": "BDL",
    "name": "Bharat Dynamics Ltd."
  },
  {
    "symbol": "BEL",
    "name": "Bharat Electronics Ltd."
  },
  {
    "symbol": "BHARATFORG",
    "name": "Bharat Forge Ltd."
  },
  {
    "symbol": "BHEL",
    "name": "Bharat Heavy Electricals Ltd."
  },
  {
    "symbol": "BPCL",
    "name": "Bharat Petroleum Corporation Ltd."
  },
  {
    "symbol": "BHARTIARTL",
    "name": "Bharti Airtel Ltd."
  },
  {
    "symbol": "BHARTIHEXA",
    "name": "Bharti Hexacom Ltd."
  },
  {
    "symbol": "BIOCON",
    "name": "Biocon Ltd."
  },
  {
    "symbol": "BLUESTARCO",
    "name": "Blue Star Ltd."
  },
  {
    "symbol": "BOSCHLTD",
    "name": "Bosch Ltd."
  },
  {
    "symbol": "BRIGADE",
    "name": "Brigade Enterprises Ltd."
  },
  {
    "symbol": "BRITANNIA",
    "name": "Britannia Industries Ltd."
  },
  {
    "symbol": "BSE",
    "name": "BSE Ltd."
  },
  {
    "symbol": "CANBK",
    "name": "Canara Bank"
  },
  {
    "symbol": "CENTRALBK",
    "name": "Central Bank Of India"
  },
  {
    "symbol": "CDSL",
    "name": "Central Depository Services (India) Ltd."
  },
  {
    "symbol": "CGPOWER",
    "name": "CG Power and Industrial Solutions Ltd."
  },
  {
    "symbol": "CHOLAHLDNG",
    "name": "Cholamandalam Financial Holdings Ltd."
  },
  {
    "symbol": "CHOLAFIN",
    "name": "Cholamandalam Investment and Finance Company Ltd."
  },
  {
    "symbol": "CIPLA",
    "name": "Cipla Ltd."
  },
  {
    "symbol": "COALINDIA",
    "name": "Coal India Ltd."
  },
  {
    "symbol": "COCHINSHIP",
    "name": "Cochin Shipyard Ltd."
  },
  {
    "symbol": "COFORGE",
    "name": "Coforge Ltd."
  },
  {
    "symbol": "COHANCE",
    "name": "Cohance Lifesciences Ltd."
  },
  {
    "symbol": "COLPAL",
    "name": "Colgate-Palmolive (India) Ltd."
  },
  {
    "symbol": "CONCOR",
    "name": "Container Corporation Of India Ltd."
  },
  {
    "symbol": "COROMANDEL",
    "name": "Coromandel International Ltd."
  },
  {
    "symbol": "CRISIL",
    "name": "CRISIL Ltd."
  },
  {
    "symbol": "CUMMINSIND",
    "name": "Cummins India Ltd."
  },
  {
    "symbol": "DABUR",
    "name": "Dabur India Ltd."
  },
  {
    "symbol": "DALBHARAT",
    "name": "Dalmia Bharat Ltd."
  },
  {
    "symbol": "DIVISLAB",
    "name": "Divi''s Laboratories Ltd."
  },
  {
    "symbol": "DIXON",
    "name": "Dixon Technologies (India) Ltd."
  },
  {
    "symbol": "DLF",
    "name": "DLF Ltd."
  },
  {
    "symbol": "DRREDDY",
    "name": "Dr. Reddy''s Laboratories Ltd."
  },
  {
    "symbol": "EICHERMOT",
    "name": "Eicher Motors Ltd."
  },
  {
    "symbol": "ENDURANCE",
    "name": "Endurance Technologies Ltd."
  },
  {
    "symbol": "ESCORTS",
    "name": "Escorts Kubota Ltd."
  },
  {
    "symbol": "ETERNAL",
    "name": "Eternal Ltd."
  },
  {
    "symbol": "EXIDEIND",
    "name": "Exide Industries Ltd."
  },
  {
    "symbol": "FORTIS",
    "name": "Fortis Healthcare Ltd."
  },
  {
    "symbol": "NYKAA",
    "name": "FSN E-Commerce Ventures Ltd."
  },
  {
    "symbol": "GAIL",
    "name": "GAIL (India) Ltd."
  },
  {
    "symbol": "GRSE",
    "name": "Garden Reach Shipbuilders & Engineers Ltd."
  },
  {
    "symbol": "SCRIP-122275",
    "name": "GE Vernova T&D India Ltd."
  },
  {
    "symbol": "GICRE",
    "name": "General Insurance Corporation of India"
  },
  {
    "symbol": "GILLETTE",
    "name": "Gillette India Ltd."
  },
  {
    "symbol": "GLAXO",
    "name": "Glaxosmithkline Pharmaceuticals Ltd."
  },
  {
    "symbol": "GLENMARK",
    "name": "Glenmark Pharmaceuticals Ltd."
  },
  {
    "symbol": "MEDANTA",
    "name": "Global Health Ltd."
  },
  {
    "symbol": "GMRAIRPORT",
    "name": "GMR Airports Ltd."
  },
  {
    "symbol": "GODIGIT",
    "name": "Go Digit General Insurance Ltd."
  },
  {
    "symbol": "GODFRYPHLP",
    "name": "Godfrey Phillips India Ltd."
  },
  {
    "symbol": "GODREJCP",
    "name": "Godrej Consumer Products Ltd."
  },
  {
    "symbol": "GODREJIND",
    "name": "Godrej Industries Ltd."
  },
  {
    "symbol": "GODREJPROP",
    "name": "Godrej Properties Ltd."
  },
  {
    "symbol": "GRASIM",
    "name": "Grasim Industries Ltd."
  },
  {
    "symbol": "FLUOROCHEM",
    "name": "Gujarat Fluorochemicals Ltd."
  },
  {
    "symbol": "GUJGASLTD",
    "name": "Gujarat Gas Ltd."
  },
  {
    "symbol": "HAVELLS",
    "name": "Havells India Ltd."
  },
  {
    "symbol": "HCLTECH",
    "name": "HCL Technologies Ltd."
  },
  {
    "symbol": "HDFCAMC",
    "name": "HDFC Asset Management Company Ltd."
  },
  {
    "symbol": "HDFCBANK",
    "name": "HDFC Bank Ltd."
  },
  {
    "symbol": "HDFCLIFE",
    "name": "HDFC Life Insurance Company Ltd."
  },
  {
    "symbol": "HEROMOTOCO",
    "name": "Hero MotoCorp Ltd."
  },
  {
    "symbol": "HEXT",
    "name": "Hexaware Technologies Ltd."
  },
  {
    "symbol": "HINDALCO",
    "name": "Hindalco Industries Ltd."
  },
  {
    "symbol": "HAL",
    "name": "Hindustan Aeronautics Ltd."
  },
  {
    "symbol": "HINDPETRO",
    "name": "Hindustan Petroleum Corporation Ltd."
  },
  {
    "symbol": "HINDUNILVR",
    "name": "Hindustan Unilever Ltd."
  },
  {
    "symbol": "HINDZINC",
    "name": "Hindustan Zinc Ltd."
  },
  {
    "symbol": "POWERINDIA",
    "name": "Hitachi Energy India Ltd."
  },
  {
    "symbol": "HONAUT",
    "name": "Honeywell Automation India Ltd."
  },
  {
    "symbol": "HUDCO",
    "name": "Housing & Urban Development Corporation Ltd."
  },
  {
    "symbol": "HYUNDAI",
    "name": "Hyundai Motor India Ltd."
  },
  {
    "symbol": "ICICIBANK",
    "name": "ICICI Bank Ltd."
  },
  {
    "symbol": "ICICIGI",
    "name": "ICICI Lombard General Insurance Company Ltd."
  },
  {
    "symbol": "ICICIPRULI",
    "name": "ICICI Prudential Life Insurance Company Ltd."
  },
  {
    "symbol": "IDBI",
    "name": "IDBI Bank Ltd."
  },
  {
    "symbol": "IDFCFIRSTB",
    "name": "IDFC First Bank Ltd."
  },
  {
    "symbol": "INDIANB",
    "name": "Indian Bank"
  },
  {
    "symbol": "IOC",
    "name": "Indian Oil Corporation Ltd."
  },
  {
    "symbol": "IOB",
    "name": "Indian Overseas Bank"
  },
  {
    "symbol": "IRCTC",
    "name": "Indian Railway Catering And Tourism Corporation Ltd."
  },
  {
    "symbol": "IRFC",
    "name": "Indian Railway Finance Corporation Ltd."
  },
  {
    "symbol": "IREDA",
    "name": "Indian Renewable Energy Development Agency Ltd."
  },
  {
    "symbol": "INDUSTOWER",
    "name": "Indus Towers Ltd."
  },
  {
    "symbol": "INDUSINDBK",
    "name": "IndusInd Bank Ltd."
  },
  {
    "symbol": "NAUKRI",
    "name": "Info Edge (India) Ltd."
  },
  {
    "symbol": "INFY",
    "name": "Infosys Ltd."
  },
  {
    "symbol": "INDIGO",
    "name": "Interglobe Aviation Ltd."
  },
  {
    "symbol": "IPCALAB",
    "name": "Ipca Laboratories Ltd."
  },
  {
    "symbol": "IRB",
    "name": "IRB Infrastructure Developers Ltd."
  },
  {
    "symbol": "ITCHOTELS",
    "name": "ITC Hotels Ltd."
  },
  {
    "symbol": "ITC",
    "name": "ITC Ltd."
  },
  {
    "symbol": "ITI",
    "name": "ITI Ltd."
  },
  {
    "symbol": "JSL",
    "name": "Jindal Stainless Ltd."
  },
  {
    "symbol": "JINDALSTEL",
    "name": "Jindal Steel & Power Ltd."
  },
  {
    "symbol": "JIOFIN",
    "name": "JIO Financial Services Ltd."
  },
  {
    "symbol": "JKCEMENT",
    "name": "JK Cement Ltd."
  },
  {
    "symbol": "JSWENERGY",
    "name": "JSW Energy Ltd."
  },
  {
    "symbol": "JSWINFRA",
    "name": "JSW Infrastructure Ltd."
  },
  {
    "symbol": "JSWSTEEL",
    "name": "JSW Steel Ltd."
  },
  {
    "symbol": "JUBLFOOD",
    "name": "Jubilant FoodWorks Ltd."
  },
  {
    "symbol": "KPRMILL",
    "name": "K.P.R. Mill Ltd."
  },
  {
    "symbol": "KALYANKJIL",
    "name": "Kalyan Jewellers India Ltd."
  },
  {
    "symbol": "KAYNES",
    "name": "Kaynes Technology India Ltd."
  },
  {
    "symbol": "KEI",
    "name": "KEI Industries Ltd."
  },
  {
    "symbol": "KOTAKBANK",
    "name": "Kotak Mahindra Bank Ltd."
  },
  {
    "symbol": "KPITTECH",
    "name": "KPIT Technologies Ltd."
  },
  {
    "symbol": "LTF",
    "name": "L&T Finance Ltd."
  },
  {
    "symbol": "LTTS",
    "name": "L&T Technology Services Ltd."
  },
  {
    "symbol": "LT",
    "name": "Larsen & Toubro Ltd."
  },
  {
    "symbol": "LAURUSLABS",
    "name": "Laurus Labs Ltd."
  },
  {
    "symbol": "LICHSGFIN",
    "name": "LIC Housing Finance Ltd."
  },
  {
    "symbol": "LICI",
    "name": "Life Insurance Corporation of India"
  },
  {
    "symbol": "LINDEINDIA",
    "name": "Linde India Ltd."
  },
  {
    "symbol": "LLOYDSME",
    "name": "Lloyds Metals & Energy Ltd."
  },
  {
    "symbol": "LTIM",
    "name": "LTIMindtree Ltd."
  },
  {
    "symbol": "LUPIN",
    "name": "Lupin Ltd."
  },
  {
    "symbol": "LODHA",
    "name": "Macrotech Developers Ltd."
  },
  {
    "symbol": "SCRIP-132720",
    "name": "Mahindra & Mahindra Financial Services Ltd."
  },
  {
    "symbol": "SCRIP-100520",
    "name": "Mahindra & Mahindra Ltd."
  },
  {
    "symbol": "MANKIND",
    "name": "Mankind Pharma Ltd."
  },
  {
    "symbol": "MARICO",
    "name": "Marico Ltd."
  },
  {
    "symbol": "MARUTI",
    "name": "Maruti Suzuki India Ltd."
  },
  {
    "symbol": "MFSL",
    "name": "Max Financial Services Ltd."
  },
  {
    "symbol": "MAXHEALTH",
    "name": "Max Healthcare Institute Ltd."
  },
  {
    "symbol": "MAZDOCK",
    "name": "Mazagon Dock Shipbuilders Ltd."
  },
  {
    "symbol": "METROBRAND",
    "name": "Metro Brands Ltd."
  },
  {
    "symbol": "MOTILALOFS",
    "name": "Motilal Oswal Financial Services Ltd."
  },
  {
    "symbol": "MPHASIS",
    "name": "Mphasis Ltd."
  },
  {
    "symbol": "MRF",
    "name": "MRF Ltd."
  },
  {
    "symbol": "MCX",
    "name": "Multi Commodity Exchange Of India Ltd."
  },
  {
    "symbol": "MUTHOOTFIN",
    "name": "Muthoot Finance Ltd."
  },
  {
    "symbol": "NH",
    "name": "Narayana Hrudayalaya Ltd."
  },
  {
    "symbol": "NATIONALUM",
    "name": "National Aluminium Company Ltd."
  },
  {
    "symbol": "NBCC",
    "name": "NBCC (India) Ltd."
  },
  {
    "symbol": "NESTLEIND",
    "name": "Nestle India Ltd."
  },
  {
    "symbol": "NHPC",
    "name": "NHPC Ltd."
  },
  {
    "symbol": "NAM-INDIA",
    "name": "Nippon Life India Asset Management Ltd."
  },
  {
    "symbol": "NLCINDIA",
    "name": "NLC India Ltd."
  },
  {
    "symbol": "NMDC",
    "name": "NMDC Ltd."
  },
  {
    "symbol": "NTPCGREEN",
    "name": "NTPC Green Energy Ltd."
  },
  {
    "symbol": "NTPC",
    "name": "NTPC Ltd."
  },
  {
    "symbol": "OBEROIRLTY",
    "name": "Oberoi Realty Ltd."
  },
  {
    "symbol": "ONGC",
    "name": "Oil & Natural Gas Corporation Ltd."
  },
  {
    "symbol": "OIL",
    "name": "Oil India Ltd."
  },
  {
    "symbol": "PAYTM",
    "name": "One97 Communications Ltd."
  },
  {
    "symbol": "OFSS",
    "name": "Oracle Financial Services Software Ltd."
  },
  {
    "symbol": "PAGEIND",
    "name": "Page Industries Ltd."
  },
  {
    "symbol": "PATANJALI",
    "name": "Patanjali Foods Ltd."
  },
  {
    "symbol": "POLICYBZR",
    "name": "PB Fintech Ltd."
  },
  {
    "symbol": "PERSISTENT",
    "name": "Persistent Systems Ltd."
  },
  {
    "symbol": "PETRONET",
    "name": "Petronet LNG Ltd."
  },
  {
    "symbol": "PIIND",
    "name": "PI Industries Ltd."
  },
  {
    "symbol": "PIDILITIND",
    "name": "Pidilite Industries Ltd."
  },
  {
    "symbol": "POLYCAB",
    "name": "Polycab India Ltd."
  },
  {
    "symbol": "POONAWALLA",
    "name": "Poonawalla Fincorp Ltd."
  },
  {
    "symbol": "PFC",
    "name": "Power Finance Corporation Ltd."
  },
  {
    "symbol": "POWERGRID",
    "name": "Power Grid Corporation Of India Ltd."
  },
  {
    "symbol": "PREMIERENE",
    "name": "Premier Energies Ltd."
  },
  {
    "symbol": "PRESTIGE",
    "name": "Prestige Estates Projects Ltd."
  },
  {
    "symbol": "PGHH",
    "name": "Procter & Gamble Hygiene and Health Care Ltd."
  },
  {
    "symbol": "PNB",
    "name": "Punjab National Bank"
  },
  {
    "symbol": "RADICO",
    "name": "Radico Khaitan Ltd."
  },
  {
    "symbol": "RVNL",
    "name": "Rail Vikas Nigam Ltd."
  },
  {
    "symbol": "RECLTD",
    "name": "REC Ltd."
  },
  {
    "symbol": "RELIANCE",
    "name": "Reliance Industries Ltd."
  },
  {
    "symbol": "MOTHERSON",
    "name": "Samvardhana Motherson International Ltd."
  },
  {
    "symbol": "SBICARD",
    "name": "SBI Cards And Payment Services Ltd."
  },
  {
    "symbol": "SBILIFE",
    "name": "SBI Life Insurance Company Ltd."
  },
  {
    "symbol": "SCHAEFFLER",
    "name": "Schaeffler India Ltd."
  },
  {
    "symbol": "SHREECEM",
    "name": "Shree Cement Ltd."
  },
  {
    "symbol": "SHRIRAMFIN",
    "name": "Shriram Finance Ltd."
  },
  {
    "symbol": "SIEMENS",
    "name": "Siemens Ltd."
  },
  {
    "symbol": "SJVN",
    "name": "SJVN Ltd."
  },
  {
    "symbol": "SOLARINDS",
    "name": "Solar Industries India Ltd."
  },
  {
    "symbol": "SONACOMS",
    "name": "Sona BLW Precision Forgings Ltd."
  },
  {
    "symbol": "SRF",
    "name": "SRF Ltd."
  },
  {
    "symbol": "SBIN",
    "name": "State Bank Of India"
  },
  {
    "symbol": "SAIL",
    "name": "Steel Authority Of India Ltd."
  },
  {
    "symbol": "SUNPHARMA",
    "name": "Sun Pharmaceutical Industries Ltd."
  },
  {
    "symbol": "SUNDARMFIN",
    "name": "Sundaram Finance Ltd."
  },
  {
    "symbol": "SUPREMEIND",
    "name": "Supreme Industries Ltd."
  },
  {
    "symbol": "SUZLON",
    "name": "Suzlon Energy Ltd."
  },
  {
    "symbol": "SWIGGY",
    "name": "Swiggy Ltd."
  },
  {
    "symbol": "TATACOMM",
    "name": "Tata Communications Ltd."
  },
  {
    "symbol": "TCS",
    "name": "Tata Consultancy Services Ltd."
  },
  {
    "symbol": "TATACONSUM",
    "name": "Tata Consumer Products Ltd."
  },
  {
    "symbol": "TATAELXSI",
    "name": "Tata Elxsi Ltd."
  },
  {
    "symbol": "TATAINVEST",
    "name": "Tata Investment Corporation Ltd."
  },
  {
    "symbol": "TATAMOTORS",
    "name": "Tata Motors Ltd."
  },
  {
    "symbol": "TATAPOWER",
    "name": "Tata Power Company Ltd."
  },
  {
    "symbol": "TATASTEEL",
    "name": "Tata Steel Ltd."
  },
  {
    "symbol": "TATATECH",
    "name": "Tata Technologies Ltd."
  },
  {
    "symbol": "TECHM",
    "name": "Tech Mahindra Ltd."
  },
  {
    "symbol": "FEDERALBNK",
    "name": "The Federal Bank Ltd."
  },
  {
    "symbol": "FACT",
    "name": "The Fertilisers And Chemicals Travancore Ltd."
  },
  {
    "symbol": "INDHOTEL",
    "name": "The Indian Hotels Company Ltd."
  },
  {
    "symbol": "NIACL",
    "name": "The New India Assurance Company Ltd."
  },
  {
    "symbol": "PHOENIXLTD",
    "name": "The Phoenix Mills Ltd."
  },
  {
    "symbol": "THERMAX",
    "name": "Thermax Ltd."
  },
  {
    "symbol": "TITAN",
    "name": "Titan Company Ltd."
  },
  {
    "symbol": "TORNTPHARM",
    "name": "Torrent Pharmaceuticals Ltd."
  },
  {
    "symbol": "TORNTPOWER",
    "name": "Torrent Power Ltd."
  },
  {
    "symbol": "TRENT",
    "name": "Trent Ltd."
  },
  {
    "symbol": "TIINDIA",
    "name": "Tube Investments of India Ltd."
  },
  {
    "symbol": "TVSMOTOR",
    "name": "TVS Motor Company Ltd."
  },
  {
    "symbol": "UCOBANK",
    "name": "UCO Bank"
  },
  {
    "symbol": "ULTRACEMCO",
    "name": "Ultratech Cement Ltd."
  },
  {
    "symbol": "UNIONBANK",
    "name": "Union Bank Of India"
  },
  {
    "symbol": "UBL",
    "name": "United Breweries Ltd."
  },
  {
    "symbol": "UNITDSPR",
    "name": "United Spirits Ltd."
  },
  {
    "symbol": "UNOMINDA",
    "name": "UNO Minda Ltd."
  },
  {
    "symbol": "UPL",
    "name": "UPL Ltd."
  },
  {
    "symbol": "VBL",
    "name": "Varun Beverages Ltd."
  },
  {
    "symbol": "VEDL",
    "name": "Vedanta Ltd."
  },
  {
    "symbol": "VMM",
    "name": "Vishal Mega Mart Ltd."
  },
  {
    "symbol": "IDEA",
    "name": "Vodafone Idea Ltd."
  },
  {
    "symbol": "VOLTAS",
    "name": "Voltas Ltd."
  },
  {
    "symbol": "WAAREEENER",
    "name": "Waaree Energies Ltd."
  },
  {
    "symbol": "WIPRO",
    "name": "Wipro Ltd."
  },
  {
    "symbol": "YESBANK",
    "name": "Yes Bank Ltd."
  },
  {
    "symbol": "ZYDUSLIFE",
    "name": "Zydus Lifesciences Ltd."
  },
  {
    "symbol": "AADHARHFC",
    "name": "Aadhar Housing Finance Ltd."
  },
  {
    "symbol": "AARTIDRUGS",
    "name": "Aarti Drugs Ltd."
  },
  {
    "symbol": "AARTIIND",
    "name": "Aarti Industries Ltd."
  },
  {
    "symbol": "AARTIPHARM",
    "name": "Aarti Pharmalabs Ltd."
  },
  {
    "symbol": "AAVAS",
    "name": "Aavas Financiers Ltd."
  },
  {
    "symbol": "ACMESOLAR",
    "name": "Acme Solar Holdings Ltd."
  },
  {
    "symbol": "ACE",
    "name": "Action Construction Equipment Ltd."
  },
  {
    "symbol": "ACUTAAS",
    "name": "Acutaas Chemicals Ltd."
  },
  {
    "symbol": "ABFRL",
    "name": "Aditya Birla Fashion and Retail Ltd."
  },
  {
    "symbol": "ABREL",
    "name": "Aditya Birla Real Estate Ltd."
  },
  {
    "symbol": "ABSLAMC",
    "name": "Aditya Birla Sun Life AMC Ltd."
  },
  {
    "symbol": "AVL",
    "name": "Aditya Vision Ltd."
  },
  {
    "symbol": "AEGISLOG",
    "name": "Aegis Logistics Ltd."
  },
  {
    "symbol": "AEGISVOPAK",
    "name": "Aegis Vopak Terminals Ltd."
  },
  {
    "symbol": "AETHER",
    "name": "Aether Industries Ltd."
  },
  {
    "symbol": "AFCONS",
    "name": "Afcons Infrastructure Ltd."
  },
  {
    "symbol": "AFFLE",
    "name": "Affle 3i Ltd."
  },
  {
    "symbol": "AGI",
    "name": "AGI Greenpac Ltd."
  },
  {
    "symbol": "AHLUCONT",
    "name": "Ahluwalia Contracts (India) Ltd."
  },
  {
    "symbol": "AJAXENGG",
    "name": "Ajax Engineering Ltd."
  },
  {
    "symbol": "AKUMS",
    "name": "Akums Drugs & Pharmaceuticals Ltd."
  },
  {
    "symbol": "AKZOINDIA",
    "name": "Akzo Nobel India Ltd."
  },
  {
    "symbol": "APLLTD",
    "name": "Alembic Pharmaceuticals Ltd."
  },
  {
    "symbol": "ALIVUS",
    "name": "Alivus Life Sciences Ltd."
  },
  {
    "symbol": "ALKYLAMINE",
    "name": "Alkyl Amines Chemicals Ltd."
  },
  {
    "symbol": "ABDL",
    "name": "Allied Blenders And Distillers Ltd."
  },
  {
    "symbol": "ALOKINDS",
    "name": "Alok Industries Ltd."
  },
  {
    "symbol": "SCRIP-100008",
    "name": "Amara Raja Energy & Mobility Ltd."
  },
  {
    "symbol": "AMBER",
    "name": "Amber Enterprises India Ltd."
  },
  {
    "symbol": "ANANDRATHI",
    "name": "Anand Rathi Wealth Ltd."
  },
  {
    "symbol": "ANANTRAJ",
    "name": "Anant Raj Ltd."
  },
  {
    "symbol": "ANGELONE",
    "name": "Angel One Ltd."
  },
  {
    "symbol": "ANURAS",
    "name": "Anupam Rasayan India Ltd."
  },
  {
    "symbol": "APOLLO",
    "name": "Apollo Micro Systems Ltd."
  },
  {
    "symbol": "APOLLOTYRE",
    "name": "Apollo Tyres Ltd."
  },
  {
    "symbol": "APTUS",
    "name": "Aptus Value Housing Finance India Ltd."
  },
  {
    "symbol": "ACI",
    "name": "Archean Chemical Industries Ltd."
  },
  {
    "symbol": "ARVINDFASN",
    "name": "Arvind Fashions Ltd."
  },
  {
    "symbol": "ARVIND",
    "name": "Arvind Ltd."
  },
  {
    "symbol": "ASAHIINDIA",
    "name": "Asahi India Glass Ltd."
  },
  {
    "symbol": "ASHOKA",
    "name": "Ashoka Buildcon Ltd."
  },
  {
    "symbol": "ASKAUTOLTD",
    "name": "ASK Automotive Ltd."
  },
  {
    "symbol": "ASTERDM",
    "name": "Aster DM Healthcare Ltd."
  },
  {
    "symbol": "ASTRAMICRO",
    "name": "Astra Microwave Products Ltd."
  },
  {
    "symbol": "ASTRAZEN",
    "name": "Astrazeneca Pharma India Ltd."
  },
  {
    "symbol": "ATHERENERG",
    "name": "Ather Energy Ltd."
  },
  {
    "symbol": "ATUL",
    "name": "Atul Ltd."
  },
  {
    "symbol": "AURIONPRO",
    "name": "Aurionpro Solutions Ltd."
  },
  {
    "symbol": "AVALON",
    "name": "Avalon Technologies Ltd."
  },
  {
    "symbol": "AVANTEL",
    "name": "Avantel Ltd."
  },
  {
    "symbol": "AVANTIFEED",
    "name": "Avanti Feeds Ltd."
  },
  {
    "symbol": "AWFIS",
    "name": "Awfis Space Solutions Ltd."
  },
  {
    "symbol": "AXISCADES",
    "name": "Axiscades Technologies Ltd."
  },
  {
    "symbol": "AZAD",
    "name": "Azad Engineering Ltd."
  },
  {
    "symbol": "BAJAJELEC",
    "name": "Bajaj Electricals Ltd."
  },
  {
    "symbol": "BALAMINES",
    "name": "Balaji Amines Ltd."
  },
  {
    "symbol": "BALRAMCHIN",
    "name": "Balrampur Chini Mills Ltd."
  },
  {
    "symbol": "BALUFORGE",
    "name": "Balu Forge Industries Ltd."
  },
  {
    "symbol": "BANCOINDIA",
    "name": "Banco Products (India) Ltd."
  },
  {
    "symbol": "BANDHANBNK",
    "name": "Bandhan Bank Ltd."
  },
  {
    "symbol": "BANARISUG",
    "name": "Bannari Amman Sugars Ltd."
  },
  {
    "symbol": "BANSALWIRE",
    "name": "Bansal Wire Industries Ltd."
  },
  {
    "symbol": "BASF",
    "name": "BASF India Ltd."
  },
  {
    "symbol": "BATAINDIA",
    "name": "Bata India Ltd."
  },
  {
    "symbol": "BAYERCROP",
    "name": "Bayer CropScience Ltd."
  },
  {
    "symbol": "BELRISE",
    "name": "Belrise Industries Ltd."
  },
  {
    "symbol": "BEML",
    "name": "BEML Ltd."
  },
  {
    "symbol": "SCRIP-219234",
    "name": "Bengal & Assam Company Ltd."
  },
  {
    "symbol": "BIKAJI",
    "name": "Bikaji Foods International Ltd."
  },
  {
    "symbol": "BIRLACORPN",
    "name": "Birla Corporation Ltd."
  },
  {
    "symbol": "BSOFT",
    "name": "Birlasoft Ltd."
  },
  {
    "symbol": "BBOX",
    "name": "Black Box Ltd."
  },
  {
    "symbol": "BLS",
    "name": "BLS International Services Ltd."
  },
  {
    "symbol": "BLUEDART",
    "name": "Blue Dart Express Ltd."
  },
  {
    "symbol": "BLUEJET",
    "name": "Blue Jet Healthcare Ltd."
  },
  {
    "symbol": "BBTC",
    "name": "Bombay Burmah Trading Corporation Ltd."
  },
  {
    "symbol": "SCRIP-311155",
    "name": "Bondada Engineering Ltd."
  },
  {
    "symbol": "BOROLTD",
    "name": "Borosil Ltd."
  },
  {
    "symbol": "BORORENEW",
    "name": "Borosil Renewables Ltd."
  },
  {
    "symbol": "FIRSTCRY",
    "name": "Brainbees Solutions Ltd."
  },
  {
    "symbol": "CAMLINFINE",
    "name": "Camlin Fine Sciences Ltd."
  },
  {
    "symbol": "CAMPUS",
    "name": "Campus Activewear Ltd."
  },
  {
    "symbol": "CANFINHOME",
    "name": "Can Fin Homes Ltd."
  },
  {
    "symbol": "CAPLIPOINT",
    "name": "Caplin Point Laboratories Ltd."
  },
  {
    "symbol": "CGCL",
    "name": "Capri Global Capital Ltd."
  },
  {
    "symbol": "CARBORUNIV",
    "name": "Carborundum Universal Ltd."
  },
  {
    "symbol": "CARERATING",
    "name": "Care Ratings Ltd."
  },
  {
    "symbol": "CARTRADE",
    "name": "CarTrade Tech Ltd."
  },
  {
    "symbol": "CASTROLIND",
    "name": "Castrol India Ltd."
  },
  {
    "symbol": "CCL",
    "name": "CCL Products (India) Ltd."
  },
  {
    "symbol": "MAPMYINDIA",
    "name": "CE Info Systems Ltd."
  },
  {
    "symbol": "CEATLTD",
    "name": "Ceat Ltd."
  },
  {
    "symbol": "CEIGALL",
    "name": "Ceigall India Ltd."
  },
  {
    "symbol": "CELLO",
    "name": "Cello World Ltd."
  },
  {
    "symbol": "CENTURYPLY",
    "name": "Century Plyboards (India) Ltd."
  },
  {
    "symbol": "CERA",
    "name": "Cera Sanitaryware Ltd."
  },
  {
    "symbol": "CESC",
    "name": "CESC Ltd."
  },
  {
    "symbol": "CHALET",
    "name": "Chalet Hotels Ltd."
  },
  {
    "symbol": "CHAMBLFERT",
    "name": "Chambal Fertilisers and Chemicals Ltd."
  },
  {
    "symbol": "CHEMPLASTS",
    "name": "Chemplast Sanmar Ltd."
  },
  {
    "symbol": "CHENNPETRO",
    "name": "Chennai Petroleum Corporation Ltd."
  },
  {
    "symbol": "CHOICEIN",
    "name": "Choice International Ltd."
  },
  {
    "symbol": "CIEINDIA",
    "name": "CIE Automotive India Ltd."
  },
  {
    "symbol": "CIGNITITEC",
    "name": "Cigniti Technologies Ltd."
  },
  {
    "symbol": "CUB",
    "name": "City Union Bank Ltd."
  },
  {
    "symbol": "CLEAN",
    "name": "Clean Science And Technology Ltd."
  },
  {
    "symbol": "CMSINFO",
    "name": "CMS Info Systems Ltd."
  },
  {
    "symbol": "CAMS",
    "name": "Computer Age Management Services Ltd."
  },
  {
    "symbol": "CONCORDBIO",
    "name": "Concord Biotech Ltd."
  },
  {
    "symbol": "CRAFTSMAN",
    "name": "Craftsman Automation Ltd."
  },
  {
    "symbol": "CREDITACC",
    "name": "CreditAccess Grameen Ltd."
  },
  {
    "symbol": "CROMPTON",
    "name": "Crompton Greaves Consumer Electricals Ltd."
  },
  {
    "symbol": "CSBBANK",
    "name": "CSB Bank Ltd."
  },
  {
    "symbol": "CYIENT",
    "name": "Cyient Ltd."
  },
  {
    "symbol": "DBCORP",
    "name": "D.B. Corp Ltd."
  },
  {
    "symbol": "DATAPATTNS",
    "name": "Data Patterns (India) Ltd."
  },
  {
    "symbol": "DCBBANK",
    "name": "DCB Bank Ltd."
  },
  {
    "symbol": "DCMSHRIRAM",
    "name": "DCM Shriram Ltd."
  },
  {
    "symbol": "DEEPAKFERT",
    "name": "Deepak Fertilisers And Petrochemicals Corporation Ltd."
  },
  {
    "symbol": "DEEPAKNTR",
    "name": "Deepak Nitrite Ltd."
  },
  {
    "symbol": "DELHIVERY",
    "name": "Delhivery Ltd."
  },
  {
    "symbol": "DEVYANI",
    "name": "Devyani International Ltd."
  },
  {
    "symbol": "DHANUKA",
    "name": "Dhanuka Agritech Ltd."
  },
  {
    "symbol": "DIACABS",
    "name": "Diamond Power Infrastructure Ltd."
  },
  {
    "symbol": "DBL",
    "name": "Dilip Buildcon Ltd."
  },
  {
    "symbol": "DCAL",
    "name": "Dishman Carbogen Amcis Ltd."
  },
  {
    "symbol": "DODLA",
    "name": "Dodla Dairy Ltd"
  },
  {
    "symbol": "DOMS",
    "name": "DOMS Industries Ltd."
  },
  {
    "symbol": "AGARWALEYE",
    "name": "Dr. Agarwal''s Health Care Ltd."
  },
  {
    "symbol": "LALPATHLAB",
    "name": "Dr. Lal Pathlabs Ltd."
  },
  {
    "symbol": "DYNAMATECH",
    "name": "Dynamatic Technologies Ltd."
  },
  {
    "symbol": "EIDPARRY",
    "name": "E.I.D. - Parry (India) Ltd."
  },
  {
    "symbol": "E2E",
    "name": "E2E Networks Ltd."
  },
  {
    "symbol": "EASEMYTRIP",
    "name": "Easy Trip Planners Ltd."
  },
  {
    "symbol": "ECLERX",
    "name": "eClerx Services Ltd."
  },
  {
    "symbol": "EDELWEISS",
    "name": "Edelweiss Financial Services Ltd."
  },
  {
    "symbol": "EIHOTEL",
    "name": "EIH Ltd."
  },
  {
    "symbol": "DRBECK",
    "name": "Elantas Beck India Ltd."
  },
  {
    "symbol": "ELECON",
    "name": "Elecon Engineering Company Ltd."
  },
  {
    "symbol": "EMIL",
    "name": "Electronics Mart India Ltd."
  },
  {
    "symbol": "ELECTCAST",
    "name": "Electrosteel Castings Ltd."
  },
  {
    "symbol": "ELGIEQUIP",
    "name": "Elgi Equipments Ltd."
  },
  {
    "symbol": "SCRIP-278126",
    "name": "Elitecon International Ltd."
  },
  {
    "symbol": "EMAMILTD",
    "name": "Emami Ltd."
  },
  {
    "symbol": "EMBDL",
    "name": "Embassy Developments Ltd."
  },
  {
    "symbol": "EMCURE",
    "name": "Emcure Pharmaceuticals Ltd."
  },
  {
    "symbol": "EMUDHRA",
    "name": "eMudhra Ltd."
  },
  {
    "symbol": "ENGINERSIN",
    "name": "Engineers India Ltd."
  },
  {
    "symbol": "ENTERO",
    "name": "Entero Healthcare Solutions Ltd."
  },
  {
    "symbol": "EPIGRAL",
    "name": "Epigral Ltd."
  },
  {
    "symbol": "EPL",
    "name": "EPL Ltd."
  },
  {
    "symbol": "EQUITASBNK",
    "name": "Equitas Small Finance Bank Ltd."
  },
  {
    "symbol": "ERIS",
    "name": "Eris Lifesciences Ltd."
  },
  {
    "symbol": "ESABINDIA",
    "name": "Esab India Ltd."
  },
  {
    "symbol": "ETHOSLTD",
    "name": "Ethos Ltd."
  },
  {
    "symbol": "EUREKAFORB",
    "name": "Eureka Forbes Ltd."
  },
  {
    "symbol": "FDC",
    "name": "FDC Ltd."
  },
  {
    "symbol": "FIEMIND",
    "name": "Fiem Industries Ltd."
  },
  {
    "symbol": "FINEORG",
    "name": "Fine Organic Industries Ltd."
  },
  {
    "symbol": "FINCABLES",
    "name": "Finolex Cables Ltd."
  },
  {
    "symbol": "FINPIPE",
    "name": "Finolex Industries Ltd."
  },
  {
    "symbol": "FSL",
    "name": "Firstsource Solutions Ltd."
  },
  {
    "symbol": "SCRIP-124743",
    "name": "Fischer Medical Ventures Ltd."
  },
  {
    "symbol": "FIVESTAR",
    "name": "Five-Star Business Finance Ltd."
  },
  {
    "symbol": "FORCEMOT",
    "name": "Force Motors Ltd."
  },
  {
    "symbol": "GABRIEL",
    "name": "Gabriel India Ltd."
  },
  {
    "symbol": "GALAXYSURF",
    "name": "Galaxy Surfactants Ltd."
  },
  {
    "symbol": "GALLANTT",
    "name": "Gallantt Ispat Ltd."
  },
  {
    "symbol": "GANESHHOUC",
    "name": "Ganesh Housing Corporation Ltd."
  },
  {
    "symbol": "GRWRHITECH",
    "name": "Garware Hi-Tech Films Ltd."
  },
  {
    "symbol": "GARFIBRES",
    "name": "Garware Technical Fibres Ltd."
  },
  {
    "symbol": "GENUSPOWER",
    "name": "Genus Power Infrastructures Ltd."
  },
  {
    "symbol": "GHCL",
    "name": "GHCL Ltd."
  },
  {
    "symbol": "GLAND",
    "name": "Gland Pharma Ltd."
  },
  {
    "symbol": "GMMPFAUDLR",
    "name": "GMM Pfaudler Ltd."
  },
  {
    "symbol": "SCRIP-305653",
    "name": "GMR Power and Urban Infra Ltd."
  },
  {
    "symbol": "GOCOLORS",
    "name": "Go Fashion (India) Ltd."
  },
  {
    "symbol": "GPIL",
    "name": "Godawari Power And Ispat Ltd."
  },
  {
    "symbol": "GODREJAGRO",
    "name": "Godrej Agrovet Ltd."
  },
  {
    "symbol": "GOKEX",
    "name": "Gokaldas Exports Ltd."
  },
  {
    "symbol": "GOKULAGRO",
    "name": "Gokul Agro Resources Ltd."
  },
  {
    "symbol": "GOPAL",
    "name": "Gopal Snacks Ltd."
  },
  {
    "symbol": "GRINFRA",
    "name": "GR Infraprojects Ltd."
  },
  {
    "symbol": "GRANULES",
    "name": "Granules India Ltd."
  },
  {
    "symbol": "GRAPHITE",
    "name": "Graphite India Ltd."
  },
  {
    "symbol": "GRAVITA",
    "name": "Gravita India Ltd."
  },
  {
    "symbol": "GREAVESCOT",
    "name": "Greaves Cotton Ltd."
  },
  {
    "symbol": "GREENLAM",
    "name": "Greenlam Industries Ltd."
  },
  {
    "symbol": "GRINDWELL",
    "name": "Grindwell Norton Ltd."
  },
  {
    "symbol": "GUJALKALI",
    "name": "Gujarat Alkalies And Chemicals Ltd."
  },
  {
    "symbol": "GAEL",
    "name": "Gujarat Ambuja Exports Ltd."
  },
  {
    "symbol": "GMDCLTD",
    "name": "Gujarat Mineral Development Corporation Ltd."
  },
  {
    "symbol": "GNFC",
    "name": "Gujarat Narmada Valley Fertilizers & Chemicals Ltd."
  },
  {
    "symbol": "GPPL",
    "name": "Gujarat Pipavav Port Ltd."
  },
  {
    "symbol": "GSFC",
    "name": "Gujarat State Fertilizers & Chemicals Ltd."
  },
  {
    "symbol": "GSPL",
    "name": "Gujarat State Petronet Ltd."
  },
  {
    "symbol": "GULFOILLUB",
    "name": "Gulf Oil Lubricants India Ltd."
  },
  {
    "symbol": "HGINFRA",
    "name": "H.G. Infra Engineering Ltd."
  },
  {
    "symbol": "HAPPSTMNDS",
    "name": "Happiest Minds Technologies Ltd."
  },
  {
    "symbol": "HAPPYFORGE",
    "name": "Happy Forgings Ltd."
  },
  {
    "symbol": "HATSUN",
    "name": "Hatsun Agro Product Ltd."
  },
  {
    "symbol": "HAWKINCOOK",
    "name": "Hawkins Cookers Ltd."
  },
  {
    "symbol": "HBLENGINE",
    "name": "HBL Engineering Ltd."
  },
  {
    "symbol": "HCG",
    "name": "Healthcare Global Enterprises Ltd."
  },
  {
    "symbol": "HEG",
    "name": "HEG Ltd."
  },
  {
    "symbol": "HEIDELBERG",
    "name": "Heidelberg Cement India Ltd."
  },
  {
    "symbol": "HEMIPROP",
    "name": "Hemisphere Properties India Ltd."
  },
  {
    "symbol": "HERITGFOOD",
    "name": "Heritage Foods Ltd."
  },
  {
    "symbol": "HFCL",
    "name": "HFCL Ltd."
  },
  {
    "symbol": "HIKAL",
    "name": "Hikal Ltd."
  },
  {
    "symbol": "HSCL",
    "name": "Himadri Speciality Chemical Ltd."
  },
  {
    "symbol": "HCC",
    "name": "Hindustan Construction Company Ltd."
  },
  {
    "symbol": "HINDCOPPER",
    "name": "Hindustan Copper Ltd."
  },
  {
    "symbol": "HNDFDS",
    "name": "Hindustan Foods Ltd."
  },
  {
    "symbol": "HMT",
    "name": "HMT Ltd."
  },
  {
    "symbol": "HOMEFIRST",
    "name": "Home First Finance Company India Ltd."
  },
  {
    "symbol": "HONASA",
    "name": "Honasa Consumer Ltd."
  },
  {
    "symbol": "ISEC",
    "name": "ICICI Securities Ltd."
  },
  {
    "symbol": "ICRA",
    "name": "ICRA Ltd."
  },
  {
    "symbol": "IFBIND",
    "name": "IFB Industries Ltd."
  },
  {
    "symbol": "IFCI",
    "name": "IFCI Ltd."
  },
  {
    "symbol": "IIFLCAPS",
    "name": "IIFL Capital Services Ltd."
  },
  {
    "symbol": "IIFL",
    "name": "IIFL Finance Ltd."
  },
  {
    "symbol": "IMAGICAA",
    "name": "Imagicaaworld Entertainment Ltd."
  },
  {
    "symbol": "INDGN",
    "name": "Indegene Ltd."
  },
  {
    "symbol": "INDIAGLYCO",
    "name": "India Glycols Ltd."
  },
  {
    "symbol": "INDIASHLTR",
    "name": "India Shelter Finance Corporation Ltd."
  },
  {
    "symbol": "ITDC",
    "name": "India Tourism Development Corporation Ltd."
  },
  {
    "symbol": "INDIAMART",
    "name": "Indiamart Intermesh Ltd."
  },
  {
    "symbol": "IEX",
    "name": "Indian Energy Exchange Ltd."
  },
  {
    "symbol": "INDIGOPNTS",
    "name": "Indigo Paints Ltd."
  },
  {
    "symbol": "ICIL",
    "name": "Indo Count Industries Ltd."
  },
  {
    "symbol": "INDOSTAR",
    "name": "Indostar Capital Finance Ltd."
  },
  {
    "symbol": "IGL",
    "name": "Indraprastha Gas Ltd."
  },
  {
    "symbol": "INFIBEAM",
    "name": "Infibeam Avenues Ltd."
  },
  {
    "symbol": "INGERRAND",
    "name": "Ingersoll-Rand (India) Ltd."
  },
  {
    "symbol": "INNOVACAP",
    "name": "Innova Captab Ltd."
  },
  {
    "symbol": "INOXGREEN",
    "name": "Inox Green Energy Services Ltd."
  },
  {
    "symbol": "INOXINDIA",
    "name": "Inox India Ltd."
  },
  {
    "symbol": "IWEL",
    "name": "Inox Wind Energy Ltd."
  },
  {
    "symbol": "INOXWIND",
    "name": "Inox Wind Ltd."
  },
  {
    "symbol": "SCRIP-306788",
    "name": "Insolation Energy Ltd."
  },
  {
    "symbol": "INTELLECT",
    "name": "Intellect Design Arena Ltd."
  },
  {
    "symbol": "IGIL",
    "name": "International Gemmological Institute (India) Ltd."
  },
  {
    "symbol": "IKS",
    "name": "Inventurus Knowledge Solutions Ltd."
  },
  {
    "symbol": "IONEXCHANG",
    "name": "Ion Exchange (India) Ltd."
  },
  {
    "symbol": "IRCON",
    "name": "Ircon International Ltd."
  },
  {
    "symbol": "ISGEC",
    "name": "ISGEC Heavy Engineering Ltd."
  },
  {
    "symbol": "ITDCEM",
    "name": "ITD Cementation India Ltd."
  },
  {
    "symbol": "JKIL",
    "name": "J Kumar Infraprojects Ltd."
  },
  {
    "symbol": "JAIBALAJI",
    "name": "Jai Balaji Industries Ltd."
  },
  {
    "symbol": "JISLJALEQS",
    "name": "Jain Irrigation Systems Ltd."
  },
  {
    "symbol": "JPPOWER",
    "name": "Jaiprakash Power Ventures Ltd."
  },
  {
    "symbol": "JSFB",
    "name": "Jana Small Finance Bank Ltd."
  },
  {
    "symbol": "JBCHEPHARM",
    "name": "JB Chemicals & Pharmaceuticals Ltd."
  },
  {
    "symbol": "JBMA",
    "name": "JBM Auto Ltd."
  },
  {
    "symbol": "JSLL",
    "name": "Jeena Sikho Lifecare Ltd."
  },
  {
    "symbol": "JINDALSAW",
    "name": "Jindal Saw Ltd."
  },
  {
    "symbol": "JINDWORLD",
    "name": "Jindal Worldwide Ltd."
  },
  {
    "symbol": "JKLAKSHMI",
    "name": "JK Lakshmi Cement Ltd."
  },
  {
    "symbol": "JKPAPER",
    "name": "JK Paper Ltd."
  },
  {
    "symbol": "JKTYRE",
    "name": "JK Tyre & Industries Ltd."
  },
  {
    "symbol": "JMFINANCIL",
    "name": "JM Financial Ltd."
  },
  {
    "symbol": "JCHAC",
    "name": "Johnson Controls - Hitachi Air Conditioning India Ltd."
  },
  {
    "symbol": "JSWHL",
    "name": "JSW Holdings Ltd."
  },
  {
    "symbol": "JUBLINGREA",
    "name": "Jubilant Ingrevia Ltd."
  },
  {
    "symbol": "JUBLPHARMA",
    "name": "Jubilant Pharmova Ltd."
  },
  {
    "symbol": "JUNIPER",
    "name": "Juniper Hotels Ltd."
  },
  {
    "symbol": "JLHL",
    "name": "Jupiter Life Line Hospitals Ltd."
  },
  {
    "symbol": "JWL",
    "name": "Jupiter Wagons Ltd."
  },
  {
    "symbol": "JUSTDIAL",
    "name": "Just Dial Ltd."
  },
  {
    "symbol": "JYOTHYLAB",
    "name": "Jyothy Labs Ltd."
  },
  {
    "symbol": "JYOTICNC",
    "name": "Jyoti CNC Automation Ltd."
  },
  {
    "symbol": "KAJARIACER",
    "name": "Kajaria Ceramics Ltd."
  },
  {
    "symbol": "KPIL",
    "name": "Kalpataru Projects International Ltd."
  },
  {
    "symbol": "SCRIP-132468",
    "name": "Kama Holdings Ltd."
  },
  {
    "symbol": "KANSAINER",
    "name": "Kansai Nerolac Paints Ltd."
  },
  {
    "symbol": "KARURVYSYA",
    "name": "Karur Vysya Bank Ltd."
  },
  {
    "symbol": "KSCL",
    "name": "Kaveri Seed Company Ltd."
  },
  {
    "symbol": "KEC",
    "name": "KEC International Ltd."
  },
  {
    "symbol": "KENNAMET",
    "name": "Kennametal India Ltd."
  },
  {
    "symbol": "RUSTOMJEE",
    "name": "Keystone Realtors Ltd"
  },
  {
    "symbol": "KFINTECH",
    "name": "KFin Technologies Ltd."
  },
  {
    "symbol": "KIOCL",
    "name": "KIOCL Ltd."
  },
  {
    "symbol": "KIRLOSBROS",
    "name": "Kirloskar Brothers Ltd."
  },
  {
    "symbol": "KIRLFER",
    "name": "Kirloskar Ferrous Industries Ltd."
  },
  {
    "symbol": "KIRLOSIND",
    "name": "Kirloskar Industries Ltd."
  },
  {
    "symbol": "KIRLOSENG",
    "name": "Kirloskar Oil Engines Ltd."
  },
  {
    "symbol": "KIRLPNU",
    "name": "Kirloskar Pneumatic Company Ltd."
  },
  {
    "symbol": "KITEX",
    "name": "Kitex Garments Ltd."
  },
  {
    "symbol": "KNRCON",
    "name": "KNR Constructions Ltd."
  },
  {
    "symbol": "KPIGREEN",
    "name": "KPI Green Energy Ltd."
  },
  {
    "symbol": "KRBL",
    "name": "KRBL Ltd."
  },
  {
    "symbol": "KIMS",
    "name": "Krishna Institute of Medical Sciences Ltd"
  },
  {
    "symbol": "KRN",
    "name": "KRN Heat Exchanger And Refrigeration Ltd."
  },
  {
    "symbol": "KSB",
    "name": "KSB Ltd."
  },
  {
    "symbol": "LATENTVIEW",
    "name": "Latent View Analytics Ltd."
  },
  {
    "symbol": "LXCHEM",
    "name": "Laxmi Organic Industries Ltd."
  },
  {
    "symbol": "IXIGO",
    "name": "Le Travenues Technology Ltd."
  },
  {
    "symbol": "LEMONTREE",
    "name": "Lemon Tree Hotels Ltd."
  },
  {
    "symbol": "LGBBROSLTD",
    "name": "LG Balakrishnan & Bros Ltd."
  },
  {
    "symbol": "LLOYDSENGG",
    "name": "Lloyds Engineering Works Ltd."
  },
  {
    "symbol": "LLOYDSENT",
    "name": "Lloyds Enterprises Ltd."
  },
  {
    "symbol": "LMW",
    "name": "LMW Ltd."
  },
  {
    "symbol": "LTFOODS",
    "name": "LT Foods Ltd."
  },
  {
    "symbol": "LUMAXTECH",
    "name": "Lumax Auto Technologies Ltd."
  },
  {
    "symbol": "LUXIND",
    "name": "Lux Industries Ltd."
  },
  {
    "symbol": "MCLOUD",
    "name": "Magellanic Cloud Ltd."
  },
  {
    "symbol": "MGL",
    "name": "Mahanagar Gas Ltd."
  },
  {
    "symbol": "MAHSCOOTER",
    "name": "Maharashtra Scooters Ltd."
  },
  {
    "symbol": "MAHSEAMLES",
    "name": "Maharashtra Seamless Ltd."
  },
  {
    "symbol": "MHRIL",
    "name": "Mahindra Holidays & Resorts India Ltd."
  },
  {
    "symbol": "MAHLIFE",
    "name": "Mahindra Lifespace Developers Ltd."
  },
  {
    "symbol": "MANINFRA",
    "name": "Man InfraConstruction Ltd."
  },
  {
    "symbol": "MANAPPURAM",
    "name": "Manappuram Finance Ltd."
  },
  {
    "symbol": "MRPL",
    "name": "Mangalore Refinery And Petrochemicals Ltd."
  },
  {
    "symbol": "MANORAMA",
    "name": "Manorama Industries Ltd."
  },
  {
    "symbol": "MARKSANS",
    "name": "Marksans Pharma Ltd."
  },
  {
    "symbol": "MASFIN",
    "name": "MAS Financial Services Ltd."
  },
  {
    "symbol": "MASTEK",
    "name": "Mastek Ltd."
  },
  {
    "symbol": "MAXESTATES",
    "name": "Max Estates Ltd."
  },
  {
    "symbol": "MEDPLUS",
    "name": "Medplus Health Services Ltd."
  },
  {
    "symbol": "METROPOLIS",
    "name": "Metropolis Healthcare Ltd."
  },
  {
    "symbol": "MINDACORP",
    "name": "Minda Corporation Ltd."
  },
  {
    "symbol": "MIDHANI",
    "name": "Mishra Dhatu Nigam Ltd."
  },
  {
    "symbol": "MMTC",
    "name": "MMTC Ltd."
  },
  {
    "symbol": "MOIL",
    "name": "MOIL Ltd."
  },
  {
    "symbol": "MSUMI",
    "name": "Motherson Sumi Wiring India Ltd."
  },
  {
    "symbol": "MPSLTD",
    "name": "MPS Ltd."
  },
  {
    "symbol": "BECTORFOOD",
    "name": "Mrs. Bectors Food Specialities Ltd."
  },
  {
    "symbol": "MTARTECH",
    "name": "MTAR Technologies Ltd."
  },
  {
    "symbol": "NATCOPHARM",
    "name": "Natco Pharma Ltd."
  },
  {
    "symbol": "NFL",
    "name": "National Fertilizers Ltd."
  },
  {
    "symbol": "SCRIP-104882",
    "name": "National Standard (India) Ltd."
  },
  {
    "symbol": "NAVA",
    "name": "Nava Ltd."
  },
  {
    "symbol": "NAVINFLUOR",
    "name": "Navin Fluorine International Ltd."
  },
  {
    "symbol": "NAZARA",
    "name": "Nazara Technologies Ltd."
  },
  {
    "symbol": "NCC",
    "name": "NCC Ltd."
  },
  {
    "symbol": "NEOGEN",
    "name": "Neogen Chemicals Ltd."
  },
  {
    "symbol": "NESCO",
    "name": "Nesco Ltd."
  },
  {
    "symbol": "NETWEB",
    "name": "Netweb Technologies India Ltd."
  },
  {
    "symbol": "NETWORK18",
    "name": "Network 18 Media & Investments Ltd."
  },
  {
    "symbol": "NPST",
    "name": "Network People Services Technologies Ltd."
  },
  {
    "symbol": "NEULANDLAB",
    "name": "Neuland Laboratories Ltd."
  },
  {
    "symbol": "NEWGEN",
    "name": "Newgen Software Technologies Ltd."
  },
  {
    "symbol": "NIITMTS",
    "name": "NIIT Learning Systems Ltd."
  },
  {
    "symbol": "NIRLON",
    "name": "Nirlon Ltd."
  },
  {
    "symbol": "NIVABUPA",
    "name": "Niva Bupa Health Insurance Company Ltd."
  },
  {
    "symbol": "NSLNISP",
    "name": "NMDC Steel Ltd."
  },
  {
    "symbol": "NUVAMA",
    "name": "Nuvama Wealth Management Ltd."
  },
  {
    "symbol": "NUVOCO",
    "name": "Nuvoco Vistas Corporation Ltd."
  },
  {
    "symbol": "OLAELEC",
    "name": "OLA Electric Mobility Ltd."
  },
  {
    "symbol": "OLECTRA",
    "name": "Olectra Greentech Ltd."
  },
  {
    "symbol": "ONESOURCE",
    "name": "Onesource Specialty Pharma Ltd."
  },
  {
    "symbol": "OPTIEMUS",
    "name": "Optiemus Infracom Ltd."
  },
  {
    "symbol": "ORIANA",
    "name": "Oriana Power Ltd."
  },
  {
    "symbol": "ORIENTCEM",
    "name": "Orient Cement Ltd."
  },
  {
    "symbol": "ORIENTELEC",
    "name": "Orient Electric Ltd."
  },
  {
    "symbol": "PARADEEP",
    "name": "Paradeep Phosphates Ltd."
  },
  {
    "symbol": "PARAS",
    "name": "Paras Defence And Space Technologies Ltd."
  },
  {
    "symbol": "PCJEWELLER",
    "name": "PC Jeweller Ltd."
  },
  {
    "symbol": "PCBL",
    "name": "PCBL Chemical Ltd."
  },
  {
    "symbol": "PDSL",
    "name": "PDS Ltd."
  },
  {
    "symbol": "PGIL",
    "name": "Pearl Global Industries Ltd."
  },
  {
    "symbol": "PFIZER",
    "name": "Pfizer Ltd."
  },
  {
    "symbol": "PGEL",
    "name": "PG Electroplast Ltd."
  },
  {
    "symbol": "SCRIP-130305",
    "name": "Piccadily Agro Industries Ltd."
  },
  {
    "symbol": "PILANIINVS",
    "name": "Pilani Investment And Industries Corporation Ltd."
  },
  {
    "symbol": "PEL",
    "name": "Piramal Enterprises Ltd."
  },
  {
    "symbol": "PPLPHARMA",
    "name": "Piramal Pharma Ltd."
  },
  {
    "symbol": "PNGJL",
    "name": "PN Gadgil Jewellers Ltd."
  },
  {
    "symbol": "PNBHOUSING",
    "name": "PNB Housing Finance Ltd."
  },
  {
    "symbol": "PNCINFRA",
    "name": "PNC Infratech Ltd."
  },
  {
    "symbol": "POLYMED",
    "name": "Poly Medicure Ltd."
  },
  {
    "symbol": "POLYPLEX",
    "name": "Polyplex Corporation Ltd."
  },
  {
    "symbol": "POWERMECH",
    "name": "Power Mech Projects Ltd."
  },
  {
    "symbol": "PRAJIND",
    "name": "Praj Industries Ltd."
  },
  {
    "symbol": "PRICOLLTD",
    "name": "Pricol Ltd."
  },
  {
    "symbol": "PRSMJOHNSN",
    "name": "Prism Johnson Ltd."
  },
  {
    "symbol": "PRIVISCL",
    "name": "Privi Speciality Chemicals Ltd."
  },
  {
    "symbol": "PGHL",
    "name": "Procter & Gamble Health Ltd."
  },
  {
    "symbol": "PRUDENT",
    "name": "Prudent Corporate Advisory Services Ltd."
  },
  {
    "symbol": "PTC",
    "name": "PTC India Ltd."
  },
  {
    "symbol": "PTCIL",
    "name": "PTC Industries Ltd."
  },
  {
    "symbol": "PSB",
    "name": "Punjab & Sind Bank"
  },
  {
    "symbol": "PURVA",
    "name": "Puravankara Ltd."
  },
  {
    "symbol": "PVRINOX",
    "name": "PVR Inox Ltd."
  },
  {
    "symbol": "QUESS",
    "name": "Quess Corp Ltd."
  },
  {
    "symbol": "RSYSTEMS",
    "name": "R Systems International Ltd."
  },
  {
    "symbol": "RAILTEL",
    "name": "Railtel Corporation Of India Ltd."
  },
  {
    "symbol": "RAIN",
    "name": "Rain Industries Ltd."
  },
  {
    "symbol": "RAINBOW",
    "name": "Rainbow Children''s Medicare Ltd."
  },
  {
    "symbol": "RAJESHEXPO",
    "name": "Rajesh Exports Ltd."
  },
  {
    "symbol": "RALLIS",
    "name": "Rallis India Ltd."
  },
  {
    "symbol": "RKFORGE",
    "name": "Ramkrishna Forgings Ltd."
  },
  {
    "symbol": "RCF",
    "name": "Rashtriya Chemicals and Fertilizers Ltd."
  },
  {
    "symbol": "RATEGAIN",
    "name": "RateGain Travel Technologies Ltd."
  },
  {
    "symbol": "RATNAMANI",
    "name": "Ratnamani Metals & Tubes Ltd."
  },
  {
    "symbol": "RTNINDIA",
    "name": "RattanIndia Enterprises Ltd."
  },
  {
    "symbol": "RTNPOWER",
    "name": "RattanIndia Power Ltd."
  },
  {
    "symbol": "RAYMONDLSL",
    "name": "Raymond Lifestyle Ltd."
  },
  {
    "symbol": "RAYMOND",
    "name": "Raymond Ltd."
  },
  {
    "symbol": "RBLBANK",
    "name": "RBL Bank Ltd."
  },
  {
    "symbol": "REDINGTON",
    "name": "Redington Ltd."
  },
  {
    "symbol": "REDTAPE",
    "name": "Redtape Ltd."
  },
  {
    "symbol": "REFEX",
    "name": "Refex Industries Ltd."
  },
  {
    "symbol": "RELAXO",
    "name": "Relaxo Footwears Ltd."
  },
  {
    "symbol": "RELINFRA",
    "name": "Reliance Infrastructure Ltd."
  },
  {
    "symbol": "RPOWER",
    "name": "Reliance Power Ltd."
  },
  {
    "symbol": "RELIGARE",
    "name": "Religare Enterprises Ltd."
  },
  {
    "symbol": "RESPONIND",
    "name": "Responsive Industries Ltd."
  },
  {
    "symbol": "RBA",
    "name": "Restaurant Brands Asia Ltd."
  },
  {
    "symbol": "RHIM",
    "name": "RHI Magnesita India Ltd."
  },
  {
    "symbol": "RITES",
    "name": "Rites Ltd."
  },
  {
    "symbol": "ROLEXRINGS",
    "name": "Rolex Rings Ltd"
  },
  {
    "symbol": "ROUTE",
    "name": "Route Mobile Ltd."
  },
  {
    "symbol": "RRKABEL",
    "name": "RR Kabel Ltd."
  },
  {
    "symbol": "SAFARI",
    "name": "Safari Industries (India) Ltd."
  },
  {
    "symbol": "SAGILITY",
    "name": "Sagility India Ltd."
  },
  {
    "symbol": "SAILIFE",
    "name": "Sai Life Sciences Ltd."
  },
  {
    "symbol": "SAMHI",
    "name": "Samhi Hotels Ltd."
  },
  {
    "symbol": "SAMMAANCAP",
    "name": "Sammaan Capital Ltd."
  },
  {
    "symbol": "SANDUMA",
    "name": "Sandur Manganese & Iron Ores Ltd."
  },
  {
    "symbol": "SANOFICONR",
    "name": "Sanofi Consumer Healthcare India Ltd."
  },
  {
    "symbol": "SANOFI",
    "name": "Sanofi India Ltd."
  },
  {
    "symbol": "SANSERA",
    "name": "Sansera Engineering Ltd."
  },
  {
    "symbol": "SAPPHIRE",
    "name": "Sapphire Foods India Ltd."
  },
  {
    "symbol": "SARDAEN",
    "name": "Sarda Energy & Minerals Ltd."
  },
  {
    "symbol": "SAREGAMA",
    "name": "Saregama India Ltd."
  },
  {
    "symbol": "SBFC",
    "name": "SBFC Finance Ltd."
  },
  {
    "symbol": "THELEELA",
    "name": "Schloss Bangalore Ltd."
  },
  {
    "symbol": "SCHNEIDER",
    "name": "Schneider Electric Infrastructure Ltd."
  },
  {
    "symbol": "SENCO",
    "name": "Senco Gold Ltd."
  },
  {
    "symbol": "SEQUENT",
    "name": "Sequent Scientific Ltd."
  },
  {
    "symbol": "SCRIP-112329",
    "name": "SG Mart Ltd."
  },
  {
    "symbol": "SHAILY",
    "name": "Shaily Engineering Plastics Ltd."
  },
  {
    "symbol": "SHAKTIPUMP",
    "name": "Shakti Pumps (India) Ltd."
  },
  {
    "symbol": "SHARDACROP",
    "name": "Sharda Cropchem Ltd."
  },
  {
    "symbol": "SHARDAMOTR",
    "name": "Sharda Motor Industries Ltd."
  },
  {
    "symbol": "SFL",
    "name": "Sheela Foam Ltd."
  },
  {
    "symbol": "SCRIP-131201",
    "name": "Shilchar Technologies Ltd."
  },
  {
    "symbol": "SHILPAMED",
    "name": "Shilpa Medicare Ltd."
  },
  {
    "symbol": "SCI",
    "name": "Shipping Corporation Of India Ltd."
  },
  {
    "symbol": "SHOPERSTOP",
    "name": "Shoppers Stop Ltd."
  },
  {
    "symbol": "RENUKA",
    "name": "Shree Renuka Sugars Ltd."
  },
  {
    "symbol": "SHRIPISTON",
    "name": "Shriram Pistons & Rings Ltd"
  },
  {
    "symbol": "SHYAMMETL",
    "name": "Shyam Metalics And Energy Ltd."
  },
  {
    "symbol": "SIGNATURE",
    "name": "Signatureglobal (India) Ltd."
  },
  {
    "symbol": "SIS",
    "name": "SIS Ltd."
  },
  {
    "symbol": "SKFINDIA",
    "name": "SKF India Ltd."
  },
  {
    "symbol": "SKIPPER",
    "name": "Skipper Ltd."
  },
  {
    "symbol": "SKYGOLD",
    "name": "Sky Gold and Diamonds Ltd."
  },
  {
    "symbol": "SOBHA",
    "name": "Sobha Ltd."
  },
  {
    "symbol": "SONATSOFTW",
    "name": "Sonata Software Ltd."
  },
  {
    "symbol": "SPICEJET",
    "name": "SpiceJet Ltd."
  },
  {
    "symbol": "STARCEMENT",
    "name": "Star Cement Ltd."
  },
  {
    "symbol": "STARHEALTH",
    "name": "Star Health and Allied Insurance Company Ltd."
  },
  {
    "symbol": "SWSOLAR",
    "name": "Sterling and Wilson Renewable Energy Ltd."
  },
  {
    "symbol": "STAR",
    "name": "Strides Pharma Science Ltd."
  },
  {
    "symbol": "STYRENIX",
    "name": "Styrenix Performance Materials Ltd."
  },
  {
    "symbol": "SUBROS",
    "name": "Subros Ltd."
  },
  {
    "symbol": "SUDARSCHEM",
    "name": "Sudarshan Chemical Industries Ltd."
  },
  {
    "symbol": "SUMICHEM",
    "name": "Sumitomo Chemical India Ltd."
  },
  {
    "symbol": "SPARC",
    "name": "Sun Pharma Advanced Research Company Ltd."
  },
  {
    "symbol": "SUNTV",
    "name": "Sun TV Network Ltd."
  },
  {
    "symbol": "SUNDARMHLD",
    "name": "Sundaram Finance Holdings Ltd."
  },
  {
    "symbol": "SUNCLAY",
    "name": "Sundaram-Clayton Ltd."
  },
  {
    "symbol": "SUNDRMFAST",
    "name": "Sundram Fasteners Ltd."
  },
  {
    "symbol": "SUNFLAG",
    "name": "Sunflag Iron And Steel Company Ltd."
  },
  {
    "symbol": "SUNTECK",
    "name": "Sunteck Realty Ltd."
  },
  {
    "symbol": "SUPRAJIT",
    "name": "Suprajit Engineering Ltd."
  },
  {
    "symbol": "SPLPETRO",
    "name": "Supreme Petrochem Ltd."
  },
  {
    "symbol": "SUPRIYA",
    "name": "Supriya Lifescience Ltd."
  },
  {
    "symbol": "SURYAROSNI",
    "name": "Surya Roshni Ltd."
  },
  {
    "symbol": "SUVEN",
    "name": "Suven Life Sciences Ltd."
  },
  {
    "symbol": "SWANENERGY",
    "name": "Swan Energy Ltd."
  },
  {
    "symbol": "SWARAJENG",
    "name": "Swaraj Engines Ltd."
  },
  {
    "symbol": "SYMPHONY",
    "name": "Symphony Ltd."
  },
  {
    "symbol": "SYNGENE",
    "name": "Syngene International Ltd."
  },
  {
    "symbol": "SYRMA",
    "name": "Syrma SGS Technology Ltd."
  },
  {
    "symbol": "TMB",
    "name": "Tamilnad Mercantile Bank Ltd."
  },
  {
    "symbol": "TANLA",
    "name": "Tanla Platforms Ltd."
  },
  {
    "symbol": "TARC",
    "name": "TARC Ltd."
  },
  {
    "symbol": "TATACHEM",
    "name": "Tata Chemicals Ltd."
  },
  {
    "symbol": "TTML",
    "name": "Tata Teleservices (Maharashtra) Ltd."
  },
  {
    "symbol": "TBOTEK",
    "name": "TBO Tek Ltd."
  },
  {
    "symbol": "TDPOWERSYS",
    "name": "TD Power Systems Ltd."
  },
  {
    "symbol": "TECHNOE",
    "name": "Techno Electric & Engineering Company Ltd."
  },
  {
    "symbol": "TIIL",
    "name": "Technocraft Industries (India) Ltd."
  },
  {
    "symbol": "TEGA",
    "name": "Tega Industries Ltd."
  },
  {
    "symbol": "TEJASNET",
    "name": "Tejas Networks Ltd."
  },
  {
    "symbol": "TEXRAIL",
    "name": "Texmaco Rail & Engineering Ltd."
  },
  {
    "symbol": "THANGAMAYL",
    "name": "Thangamayil Jewellery Ltd."
  },
  {
    "symbol": "ANUP",
    "name": "The Anup Engineering Ltd."
  },
  {
    "symbol": "GESHIP",
    "name": "The Great Eastern Shipping Company Ltd."
  },
  {
    "symbol": "INDIACEM",
    "name": "The India Cements Ltd."
  },
  {
    "symbol": "SCRIP-132209",
    "name": "The Jammu & Kashmir Bank Ltd."
  },
  {
    "symbol": "KTKBANK",
    "name": "The Karnataka Bank Ltd."
  },
  {
    "symbol": "RAMCOCEM",
    "name": "The Ramco Cements Ltd."
  },
  {
    "symbol": "SOUTHBANK",
    "name": "The South Indian Bank Ltd."
  },
  {
    "symbol": "THOMASCOOK",
    "name": "Thomas Cook (India) Ltd."
  },
  {
    "symbol": "THYROCARE",
    "name": "Thyrocare Technologies Ltd."
  },
  {
    "symbol": "TI",
    "name": "Tilaknagar Industries Ltd."
  },
  {
    "symbol": "TIMETECHNO",
    "name": "Time Technoplast Ltd."
  },
  {
    "symbol": "TIMKEN",
    "name": "Timken India Ltd."
  },
  {
    "symbol": "TIPSMUSIC",
    "name": "Tips Music Ltd."
  },
  {
    "symbol": "TITAGARH",
    "name": "Titagarh Rail Systems Ltd."
  },
  {
    "symbol": "TARIL",
    "name": "Transformers & Rectifiers (India) Ltd."
  },
  {
    "symbol": "TCI",
    "name": "Transport Corporation Of India Ltd."
  },
  {
    "symbol": "TRANSRAILL",
    "name": "Transrail Lighting Ltd."
  },
  {
    "symbol": "TRIDENT",
    "name": "Trident Ltd."
  },
  {
    "symbol": "TRIVENI",
    "name": "Triveni Engineering & Industries Ltd."
  },
  {
    "symbol": "TRITURBINE",
    "name": "Triveni Turbine Ltd."
  },
  {
    "symbol": "TTKPRESTIG",
    "name": "TTK Prestige Ltd."
  },
  {
    "symbol": "TVSHLTD",
    "name": "TVS Holdings Ltd."
  },
  {
    "symbol": "TVSSCS",
    "name": "TVS Supply Chain Solutions Ltd."
  },
  {
    "symbol": "UFLEX",
    "name": "Uflex Ltd."
  },
  {
    "symbol": "UJJIVANSFB",
    "name": "Ujjivan Small Finance Bank Ltd."
  },
  {
    "symbol": "UNICHEMLAB",
    "name": "Unichem Laboratories Ltd."
  },
  {
    "symbol": "UNIMECH",
    "name": "Unimech Aerospace and Manufacturing Ltd."
  },
  {
    "symbol": "USHAMART",
    "name": "Usha Martin Ltd."
  },
  {
    "symbol": "UTIAMC",
    "name": "UTI Asset Management Company Ltd."
  },
  {
    "symbol": "VGUARD",
    "name": "V-Guard Industries Ltd."
  },
  {
    "symbol": "VMART",
    "name": "V-Mart Retail Ltd."
  },
  {
    "symbol": "V2RETAIL",
    "name": "V2 Retail Ltd."
  },
  {
    "symbol": "WABAG",
    "name": "VA Tech Wabag Ltd."
  },
  {
    "symbol": "VAIBHAVGBL",
    "name": "Vaibhav Global Ltd."
  },
  {
    "symbol": "DBREALTY",
    "name": "Valor Estate Ltd."
  },
  {
    "symbol": "VTL",
    "name": "Vardhman Textiles Ltd."
  },
  {
    "symbol": "VARROC",
    "name": "Varroc Engineering Ltd."
  },
  {
    "symbol": "MANYAVAR",
    "name": "Vedant Fashions Ltd."
  },
  {
    "symbol": "VENTIVE",
    "name": "Ventive Hospitality Ltd."
  },
  {
    "symbol": "VESUVIUS",
    "name": "Vesuvius India Ltd."
  },
  {
    "symbol": "VIJAYA",
    "name": "Vijaya Diagnostic Centre Ltd."
  },
  {
    "symbol": "VINATIORGA",
    "name": "Vinati Organics Ltd."
  },
  {
    "symbol": "VIPIND",
    "name": "VIP Industries Ltd."
  },
  {
    "symbol": "VOLTAMP",
    "name": "Voltamp Transformers Ltd."
  },
  {
    "symbol": "VRLLOG",
    "name": "VRL Logistics Ltd."
  },
  {
    "symbol": "VSTIND",
    "name": "VST Industries Ltd."
  },
  {
    "symbol": "WAAREERTL",
    "name": "Waaree Renewable Technologies Ltd."
  },
  {
    "symbol": "WEBELSOLAR",
    "name": "Websol Energy System Ltd."
  },
  {
    "symbol": "WELCORP",
    "name": "Welspun Corp Ltd."
  },
  {
    "symbol": "WELENT",
    "name": "Welspun Enterprises Ltd."
  },
  {
    "symbol": "WELSPUNLIV",
    "name": "Welspun Living Ltd."
  },
  {
    "symbol": "WESTLIFE",
    "name": "Westlife Foodworld Ltd"
  },
  {
    "symbol": "WHIRLPOOL",
    "name": "Whirlpool Of India Ltd."
  },
  {
    "symbol": "WOCKPHARMA",
    "name": "Wockhardt Ltd."
  },
  {
    "symbol": "WONDERLA",
    "name": "Wonderla Holidays Ltd."
  },
  {
    "symbol": "SCRIP-105872",
    "name": "WPIL Ltd."
  },
  {
    "symbol": "YATHARTH",
    "name": "Yatharth Hospital & Trauma Care Services Ltd."
  },
  {
    "symbol": "BASF",
    "name": "BASF India Ltd."
  },
  {
    "symbol": "BAYERCROP",
    "name": "Bayer CropScience Ltd."
  },
  {
    "symbol": "DHANUKA",
    "name": "Dhanuka Agritech Ltd."
  },
  {
    "symbol": "RALLIS",
    "name": "Rallis India Ltd."
  },
  {
    "symbol": "SHARDACROP",
    "name": "Sharda Cropchem Ltd."
  },
  {
    "symbol": "SUMICHEM",
    "name": "Sumitomo Chemical India Ltd."
  },
  {
    "symbol": "20MICRONS",
    "name": "20 Microns Ltd."
  },
  {
    "symbol": "532067",
    "name": "3B Blackbio Dx Ltd."
  },
  {
    "symbol": "5PAISA",
    "name": "5Paisa Capital Ltd."
  },
  {
    "symbol": "63MOONS",
    "name": "63 Moons Technologies Ltd."
  },
  {
    "symbol": "540718",
    "name": "Aayush Art And Bullion Ltd."
  },
  {
    "symbol": "539528",
    "name": "Aayush Wellness Ltd."
  },
  {
    "symbol": "ABCOTS",
    "name": "AB Cotspin India Ltd."
  },
  {
    "symbol": "ABINFRA",
    "name": "AB Infrabuild Ltd."
  },
  {
    "symbol": "AFSL",
    "name": "Abans Financial Services Ltd."
  },
  {
    "symbol": "ACCELYA",
    "name": "Accelya Solutions India Ltd."
  },
  {
    "symbol": "ADFFOODS",
    "name": "ADF Foods Ltd."
  },
  {
    "symbol": "BIRLAMONEY",
    "name": "Aditya Birla Money Ltd."
  },
  {
    "symbol": "ADOR",
    "name": "Ador Welding Ltd."
  },
  {
    "symbol": "543230",
    "name": "Advait Energy Transitions Ltd."
  },
  {
    "symbol": "ADVENZYMES",
    "name": "Advanced Enzyme Technologies Ltd."
  },
  {
    "symbol": "SATINDLTD",
    "name": "Aeroflex Enterprises Ltd."
  },
  {
    "symbol": "AEROFLEX",
    "name": "Aeroflex Industries Ltd."
  },
  {
    "symbol": "544224",
    "name": "Afcom Holdings Ltd."
  },
  {
    "symbol": "AGARIND",
    "name": "Agarwal Industrial Corporation Ltd."
  },
  {
    "symbol": "AGIIL",
    "name": "AGI Infra Ltd."
  },
  {
    "symbol": "AIMTRON",
    "name": "Aimtron Electronics Ltd."
  },
  {
    "symbol": "AJMERA",
    "name": "Ajmera Realty & Infra India Ltd."
  },
  {
    "symbol": "ALEMBICLTD",
    "name": "Alembic Ltd."
  },
  {
    "symbol": "505725",
    "name": "Algoquant Fintech Ltd."
  },
  {
    "symbol": "ALICON",
    "name": "Alicon Castalloy Ltd."
  },
  {
    "symbol": "ALLETEC",
    "name": "All E Technologies Ltd."
  },
  {
    "symbol": "ACLGATI",
    "name": "Allcargo Gati Ltd."
  },
  {
    "symbol": "ALLCARGO",
    "name": "Allcargo Logistics Ltd."
  },
  {
    "symbol": "ATL",
    "name": "Allcargo Terminals Ltd."
  },
  {
    "symbol": "ALLDIGI",
    "name": "Alldigi Tech Ltd."
  },
  {
    "symbol": "ADSL",
    "name": "Allied Digital Services Ltd."
  },
  {
    "symbol": "ALPEXSOLAR",
    "name": "Alpex Solar Ltd."
  },
  {
    "symbol": "506597",
    "name": "Amal Ltd."
  },
  {
    "symbol": "AMBIKCO",
    "name": "Ambika Cotton Mills Ltd."
  },
  {
    "symbol": "544037",
    "name": "Amic Forging Ltd."
  },
  {
    "symbol": "AMNPLST",
    "name": "Amines & Plasticizers Ltd."
  },
  {
    "symbol": "AMRUTANJAN",
    "name": "Amrutanjan Health Care Ltd."
  },
  {
    "symbol": "ANDHRAPAP",
    "name": "Andhra Paper Ltd."
  },
  {
    "symbol": "ANDREWYU",
    "name": "Andrew Yule & Company Ltd."
  },
  {
    "symbol": "AWHCL",
    "name": "Antony Waste Handling Cell Ltd."
  },
  {
    "symbol": "ANUHPHR",
    "name": "Anuh Pharma Ltd."
  },
  {
    "symbol": "APCOTEXIND",
    "name": "Apcotex Industries Ltd."
  },
  {
    "symbol": "PARKHOTELS",
    "name": "Apeejay Surrendra Park Hotels Ltd."
  },
  {
    "symbol": "APOLLOPIPE",
    "name": "Apollo Pipes Ltd."
  },
  {
    "symbol": "APTECHT",
    "name": "Aptech Ltd."
  },
  {
    "symbol": "ARIHANTCAP",
    "name": "Arihant Capital Markets Ltd."
  },
  {
    "symbol": "ARIHANTSUP",
    "name": "Arihant Superstructures Ltd."
  },
  {
    "symbol": "ARKADE",
    "name": "Arkade Developers Ltd."
  },
  {
    "symbol": "ARMANFIN",
    "name": "Arman Financial Services Ltd."
  },
  {
    "symbol": "ARROWGREEN",
    "name": "Arrow Greentech Ltd."
  },
  {
    "symbol": "ARTEMISMED",
    "name": "Artemis Medicare Services Ltd."
  },
  {
    "symbol": "ARVSMART",
    "name": "Arvind Smartspaces Ltd."
  },
  {
    "symbol": "ASHAPURMIN",
    "name": "Ashapura Minechem Ltd."
  },
  {
    "symbol": "ASHIANA",
    "name": "Ashiana Housing Ltd."
  },
  {
    "symbol": "543766",
    "name": "Ashika Credit Capital Ltd."
  },
  {
    "symbol": "ASIANENE",
    "name": "Asian Energy Services Ltd."
  },
  {
    "symbol": "ASIANTILES",
    "name": "Asian Granito India Ltd."
  },
  {
    "symbol": "531847",
    "name": "Asian Star Company Ltd."
  },
  {
    "symbol": "526433",
    "name": "ASM Technologies Ltd."
  },
  {
    "symbol": "ASALCBR",
    "name": "Associated Alcohols & Breweries Ltd."
  },
  {
    "symbol": "ASTEC",
    "name": "Astec Lifesciences Ltd."
  },
  {
    "symbol": "ATULAUTO",
    "name": "Atul Auto Ltd."
  },
  {
    "symbol": "AURUM",
    "name": "Aurum Proptech Ltd."
  },
  {
    "symbol": "APS",
    "name": "Australian Premium Solar (India) Ltd."
  },
  {
    "symbol": "AUTOCORP",
    "name": "Automobile Corporation of Goa Ltd."
  },
  {
    "symbol": "AUTOAXLES",
    "name": "Automotive Axles Ltd."
  },
  {
    "symbol": "ASAL",
    "name": "Automotive Stampings and Assemblies Ltd."
  },
  {
    "symbol": "AVADHSUGAR",
    "name": "Avadh Sugar & Energy Ltd."
  },
  {
    "symbol": "AVTNPL",
    "name": "AVT Natural Products Ltd."
  },
  {
    "symbol": "523850",
    "name": "Axtel Industries Ltd."
  },
  {
    "symbol": "AYMSYNTEX",
    "name": "AYM Syntex Ltd."
  },
  {
    "symbol": "BLKASHYAP",
    "name": "B.L. Kashyap and Sons Ltd."
  },
  {
    "symbol": "STYLEBAAZA",
    "name": "Baazar Style Retail Ltd."
  },
  {
    "symbol": "BAJAJCON",
    "name": "Bajaj Consumer Care Ltd."
  },
  {
    "symbol": "BAJAJHCARE",
    "name": "Bajaj Healthcare Ltd."
  },
  {
    "symbol": "BAJAJHIND",
    "name": "Bajaj Hindusthan Sugar Ltd."
  },
  {
    "symbol": "507944",
    "name": "Bajaj Steel Industries Ltd."
  },
  {
    "symbol": "BAJEL",
    "name": "Bajel Projects Ltd."
  },
  {
    "symbol": "BALAJITELE",
    "name": "Balaji Telefilms Ltd."
  },
  {
    "symbol": "BALMLAWRIE",
    "name": "Balmer Lawrie & Company Ltd."
  },
  {
    "symbol": "532485",
    "name": "Balmer Lawrie Investments Ltd."
  },
  {
    "symbol": "512025",
    "name": "Banganga Paper Industries Ltd."
  },
  {
    "symbol": "BARBEQUE",
    "name": "Barbeque-Nation Hospitality Ltd."
  },
  {
    "symbol": "BASILIC",
    "name": "Basilic Fly Studio Ltd."
  },
  {
    "symbol": "BCLIND",
    "name": "BCL Industries Ltd."
  },
  {
    "symbol": "539018",
    "name": "Beekay Steel Industries Ltd."
  },
  {
    "symbol": "BLAL",
    "name": "BEML Land Assets Ltd."
  },
  {
    "symbol": "509438",
    "name": "Benares Hotels Ltd."
  },
  {
    "symbol": "BESTAGRO",
    "name": "Best Agrolife Ltd."
  },
  {
    "symbol": "BETA",
    "name": "Beta Drugs Ltd."
  },
  {
    "symbol": "BFINVEST",
    "name": "BF Investment Ltd."
  },
  {
    "symbol": "BFUTILITIE",
    "name": "BF Utilities Ltd."
  },
  {
    "symbol": "BGRENERGY",
    "name": "BGR Energy Systems Ltd."
  },
  {
    "symbol": "BHAGERIA",
    "name": "Bhageria Industries Ltd."
  },
  {
    "symbol": "BHAGCHEM",
    "name": "Bhagiradha Chemicals & Industries Ltd."
  },
  {
    "symbol": "BEPL",
    "name": "Bhansali Engineering Polymers Ltd."
  },
  {
    "symbol": "BBL",
    "name": "Bharat Bijlee Ltd."
  },
  {
    "symbol": "521238",
    "name": "Bharat Global Developers Ltd."
  },
  {
    "symbol": "541096",
    "name": "Bharat Parenterals Ltd."
  },
  {
    "symbol": "BHARATRAS",
    "name": "Bharat Rasayan Ltd."
  },
  {
    "symbol": "BHARATWIRE",
    "name": "Bharat Wire Ropes Ltd."
  },
  {
    "symbol": "BIL",
    "name": "Bhartiya International Ltd."
  },
  {
    "symbol": "BIGBLOC",
    "name": "Bigbloc Construction Ltd."
  },
  {
    "symbol": "BIRLANU",
    "name": "BirlaNu Ltd."
  },
  {
    "symbol": "BLISSGVS",
    "name": "Bliss GVS Pharma Ltd."
  },
  {
    "symbol": "BLSE",
    "name": "BLS E-Services Ltd."
  },
  {
    "symbol": "539607",
    "name": "Blue Cloud Softech Solutions Ltd."
  },
  {
    "symbol": "514440",
    "name": "Blue Pearl Agriventures Ltd."
  },
  {
    "symbol": "542669",
    "name": "BMW Industries Ltd."
  },
  {
    "symbol": "526125",
    "name": "BN Holdings Ltd."
  },
  {
    "symbol": "BODALCHEM",
    "name": "Bodal Chemicals Ltd."
  },
  {
    "symbol": "BOMDYEING",
    "name": "Bombay Dyeing And Manufacturing Company Ltd."
  },
  {
    "symbol": "BSHSL",
    "name": "Bombay Super Hybrid Seeds Ltd."
  },
  {
    "symbol": "BOROSCI",
    "name": "Borosil Scientific Ltd."
  },
  {
    "symbol": "543831",
    "name": "Bright Outdoor Media Ltd."
  },
  {
    "symbol": "BCG",
    "name": "Brightcom Group Ltd."
  },
  {
    "symbol": "BUTTERFLY",
    "name": "Butterfly Gandhimathi Appliances Ltd."
  },
  {
    "symbol": "C2C",
    "name": "C2C Advanced Systems Ltd."
  },
  {
    "symbol": "CANTABIL",
    "name": "Cantabil Retail India Ltd."
  },
  {
    "symbol": "CAPACITE",
    "name": "Capacit''e Infraprojects Ltd."
  },
  {
    "symbol": "CIFL",
    "name": "Capital India Finance Ltd."
  },
  {
    "symbol": "CAPITALSFB",
    "name": "Capital Small Finance Bank Ltd."
  },
  {
    "symbol": "CARRARO",
    "name": "Carraro India Ltd."
  },
  {
    "symbol": "CARYSIL",
    "name": "Carysil Ltd."
  },
  {
    "symbol": "538734",
    "name": "Ceinsys Tech Ltd."
  },
  {
    "symbol": "CELLECOR",
    "name": "Cellecor Gadgets Ltd."
  },
  {
    "symbol": "CENTRUM",
    "name": "Centrum Capital Ltd."
  },
  {
    "symbol": "CENTUM",
    "name": "Centum Electronics Ltd."
  },
  {
    "symbol": "CENTENKA",
    "name": "Century Enka Ltd."
  },
  {
    "symbol": "543920",
    "name": "CFF Fluid Control Ltd."
  },
  {
    "symbol": "CLSEL",
    "name": "Chaman Lal Setia Exports Ltd."
  },
  {
    "symbol": "CHEMCON",
    "name": "Chemcon Speciality Chemicals Ltd."
  },
  {
    "symbol": "CHEMFAB",
    "name": "Chemfab Alkalis Ltd."
  },
  {
    "symbol": "519477",
    "name": "CIAN Agro Industries & Infrastructure Ltd."
  },
  {
    "symbol": "542727",
    "name": "City Pulse Multiventures Ltd."
  },
  {
    "symbol": "542866",
    "name": "Colab Platforms Ltd."
  },
  {
    "symbol": "543619",
    "name": "Concord Control Systems Ltd."
  },
  {
    "symbol": "CEWATER",
    "name": "Concord Enviro Systems Ltd."
  },
  {
    "symbol": "CONFIPET",
    "name": "Confidence Petroleum India Ltd."
  },
  {
    "symbol": "CCCL",
    "name": "Consolidated Construction Consortium Ltd."
  },
  {
    "symbol": "CONTROLPR",
    "name": "Control Print Ltd."
  },
  {
    "symbol": "COOLCAPS",
    "name": "Cool Caps Industries Ltd."
  },
  {
    "symbol": "543928",
    "name": "Cosmic CRF Ltd."
  },
  {
    "symbol": "COSMOFIRST",
    "name": "Cosmo First Ltd."
  },
  {
    "symbol": "CREATIVE",
    "name": "Creative Newtech Ltd."
  },
  {
    "symbol": "MUFTI",
    "name": "Credo Brands Marketing Ltd."
  },
  {
    "symbol": "CREST",
    "name": "Crest Ventures Ltd."
  },
  {
    "symbol": "523105",
    "name": "Cropster Agro Ltd."
  },
  {
    "symbol": "CSLFINANCE",
    "name": "CSL Finance Ltd."
  },
  {
    "symbol": "CUPID",
    "name": "Cupid Ltd."
  },
  {
    "symbol": "CYIENTDLM",
    "name": "Cyient DLM Ltd."
  },
  {
    "symbol": "DLINKINDIA",
    "name": "D-Link (India) Ltd."
  },
  {
    "symbol": "DPABHUSHAN",
    "name": "D.P. Abhushan Ltd."
  },
  {
    "symbol": "DALMIASUG",
    "name": "Dalmia Bharat Sugar And Industries Ltd."
  },
  {
    "symbol": "DAMCAPITAL",
    "name": "DAM Capital Advisors Ltd."
  },
  {
    "symbol": "DANISH",
    "name": "Danish Power Ltd."
  },
  {
    "symbol": "DATAMATICS",
    "name": "Datamatics Global Services Ltd."
  },
  {
    "symbol": "DCMSRIND",
    "name": "DCM Shriram Industries Ltd."
  },
  {
    "symbol": "DCW",
    "name": "DCW Ltd."
  },
  {
    "symbol": "DCXINDIA",
    "name": "DCX Systems Ltd."
  },
  {
    "symbol": "DDEVPLSTIK",
    "name": "Ddev Plastiks Industries Ltd."
  },
  {
    "symbol": "DECCANCE",
    "name": "Deccan Cements Ltd."
  },
  {
    "symbol": "512068",
    "name": "Deccan Gold Mines Ltd."
  },
  {
    "symbol": "DEEDEV",
    "name": "Dee Development Engineers Ltd"
  },
  {
    "symbol": "DEEPINDS",
    "name": "Deep Industries Ltd."
  },
  {
    "symbol": "DELTACORP",
    "name": "Delta Corp Ltd."
  },
  {
    "symbol": "DEN",
    "name": "Den Networks Ltd."
  },
  {
    "symbol": "DENTA",
    "name": "Denta Water And Infra Solutions Ltd."
  },
  {
    "symbol": "DHAMPURSUG",
    "name": "Dhampur Sugar Mills Ltd."
  },
  {
    "symbol": "DHANI",
    "name": "Dhani Services Ltd."
  },
  {
    "symbol": "DHANBANK",
    "name": "Dhanlaxmi Bank Ltd."
  },
  {
    "symbol": "DHARMAJ",
    "name": "Dharmaj Crop Guard Ltd."
  },
  {
    "symbol": "DHUNINV",
    "name": "Dhunseri Investments Ltd."
  },
  {
    "symbol": "DVL",
    "name": "Dhunseri Ventures Ltd."
  },
  {
    "symbol": "DIFFNKG",
    "name": "Diffusion Engineers Ltd."
  },
  {
    "symbol": "GEORGFISCH",
    "name": "Disa India Ltd."
  },
  {
    "symbol": "DISHTV",
    "name": "Dish TV India Ltd."
  },
  {
    "symbol": "DIVGIITTS",
    "name": "Divgi Torqtransfer Systems Ltd."
  },
  {
    "symbol": "DOLATALGO",
    "name": "Dolat Algotech Ltd."
  },
  {
    "symbol": "DOLLAR",
    "name": "Dollar Industries Ltd."
  },
  {
    "symbol": "DOLPHIN",
    "name": "Dolphin Offshore Enterprises (India) Ltd."
  },
  {
    "symbol": "526783",
    "name": "Dr Agarwals Eye Hospital Ltd."
  },
  {
    "symbol": "DREAMFOLKS",
    "name": "Dreamfolks Services Ltd."
  },
  {
    "symbol": "DREDGECORP",
    "name": "Dredging Corporation Of India Ltd."
  },
  {
    "symbol": "DWARKESH",
    "name": "Dwarikesh Sugar Industries Ltd."
  },
  {
    "symbol": "DSSL",
    "name": "Dynacons Systems & Solutions Ltd."
  },
  {
    "symbol": "DYCL",
    "name": "Dynamic Cables Ltd."
  },
  {
    "symbol": "530643",
    "name": "Eco Recycling Ltd."
  },
  {
    "symbol": "ECOSMOBLTY",
    "name": "Ecos (India) Mobility & Hospitality Ltd."
  },
  {
    "symbol": "512008",
    "name": "EFC (I) Ltd."
  },
  {
    "symbol": "EIHAHOTELS",
    "name": "EIH Associated Hotels Ltd."
  },
  {
    "symbol": "EIMCOELECO",
    "name": "Eimco Elecon (India) Ltd."
  },
  {
    "symbol": "503681",
    "name": "Elcid Investments Ltd."
  },
  {
    "symbol": "ELDEHSG",
    "name": "Eldeco Housing & Industries Ltd."
  },
  {
    "symbol": "ELECTHERM",
    "name": "Electrotherm (India) Ltd."
  },
  {
    "symbol": "ELIN",
    "name": "Elin Electronics Ltd."
  },
  {
    "symbol": "ELPROINTL",
    "name": "Elpro International Ltd."
  },
  {
    "symbol": "EMSLIMITED",
    "name": "EMS Ltd."
  },
  {
    "symbol": "533477",
    "name": "Enkei Wheels (India) Ltd."
  },
  {
    "symbol": "ENIL",
    "name": "Entertainment Network (India) Ltd."
  },
  {
    "symbol": "EIEL",
    "name": "Enviro Infra Engineers Ltd."
  },
  {
    "symbol": "EPACK",
    "name": "EPACK Durable Ltd."
  },
  {
    "symbol": "531035",
    "name": "Eraaya Lifespaces Ltd."
  },
  {
    "symbol": "ESAFSFB",
    "name": "ESAF Small Finance Bank Ltd."
  },
  {
    "symbol": "ESFL",
    "name": "Essen Speciality Films Ltd."
  },
  {
    "symbol": "ESTER",
    "name": "Ester Industries Ltd."
  },
  {
    "symbol": "EVEREADY",
    "name": "Eveready Industries India Ltd."
  },
  {
    "symbol": "EVERESTIND",
    "name": "Everest Industries Ltd."
  },
  {
    "symbol": "EKC",
    "name": "Everest Kanto Cylinder Ltd."
  },
  {
    "symbol": "EXCELINDUS",
    "name": "Excel Industries Ltd."
  },
  {
    "symbol": "EXICOM",
    "name": "Exicom Tele-Systems Ltd."
  },
  {
    "symbol": "EXPLEOSOL",
    "name": "Expleo Solutions Ltd."
  },
  {
    "symbol": "FAIRCHEMOR",
    "name": "Fairchem Organics Ltd."
  },
  {
    "symbol": "FAZE3Q",
    "name": "Faze Three Ltd."
  },
  {
    "symbol": "FEDFINA",
    "name": "Fedbank Financial Services Ltd"
  },
  {
    "symbol": "511628",
    "name": "Fedders Holding Ltd."
  },
  {
    "symbol": "FMGOETZE",
    "name": "Federal-Mogul Goetze (India) Ltd."
  },
  {
    "symbol": "506414",
    "name": "Fermenta Biotech Ltd."
  },
  {
    "symbol": "FILATEX",
    "name": "Filatex India Ltd."
  },
  {
    "symbol": "FCL",
    "name": "Fineotex Chemical Ltd."
  },
  {
    "symbol": "508954",
    "name": "Finkurve Financial Services Ltd."
  },
  {
    "symbol": "FINOPB",
    "name": "Fino Payments Bank Ltd."
  },
  {
    "symbol": "FLAIR",
    "name": "Flair Writing Industries Ltd."
  },
  {
    "symbol": "FOCE",
    "name": "Foce India Ltd."
  },
  {
    "symbol": "FOCUS",
    "name": "Focus Lighting & Fixtures Ltd."
  },
  {
    "symbol": "FOODSIN",
    "name": "Foods & Inns Ltd."
  },
  {
    "symbol": "544186",
    "name": "Forbes Precision Tools And Machine Parts Ltd."
  },
  {
    "symbol": "FOSECOIND",
    "name": "Foseco India Ltd."
  },
  {
    "symbol": "522195",
    "name": "Frontier Springs Ltd."
  },
  {
    "symbol": "FUSION",
    "name": "Fusion Finance Ltd."
  },
  {
    "symbol": "GALAPREC",
    "name": "Gala Precision Engineering Ltd."
  },
  {
    "symbol": "GANDHAR",
    "name": "Gandhar Oil Refinery (India) Ltd."
  },
  {
    "symbol": "GANDHITUBE",
    "name": "Gandhi Special Tubes Ltd."
  },
  {
    "symbol": "GANESHBE",
    "name": "Ganesh Benzoplast Ltd."
  },
  {
    "symbol": "GGBL",
    "name": "Ganesh Green Bharat Ltd."
  },
  {
    "symbol": "GANESHIN",
    "name": "Ganesh Infraworld Ltd."
  },
  {
    "symbol": "GANECOS",
    "name": "Ganesha Ecosphere Ltd."
  },
  {
    "symbol": "GARUDA",
    "name": "Garuda Construction & Engineering Ltd."
  },
  {
    "symbol": "GATEWAY",
    "name": "Gateway Distriparks Ltd."
  },
  {
    "symbol": "GEPIL",
    "name": "GE Power India Ltd."
  },
  {
    "symbol": "GEECEE",
    "name": "GeeCee Ventures Ltd."
  },
  {
    "symbol": "GENESYS",
    "name": "Genesys International Corporation Ltd."
  },
  {
    "symbol": "GEOJITFSL",
    "name": "Geojit Financial Services Ltd."
  },
  {
    "symbol": "GHCLTEXTIL",
    "name": "GHCL Textiles Ltd."
  },
  {
    "symbol": "505504",
    "name": "GHV Infra Projects Ltd."
  },
  {
    "symbol": "GICHSGFIN",
    "name": "GIC Housing Finance Ltd."
  },
  {
    "symbol": "GKWLIMITED",
    "name": "GKW Ltd."
  },
  {
    "symbol": "GLOBUSSPR",
    "name": "Globus Spirits Ltd."
  },
  {
    "symbol": "GLOSTERLTD",
    "name": "Gloster Ltd."
  },
  {
    "symbol": "GMBREW",
    "name": "GM Breweries Ltd."
  },
  {
    "symbol": "GNA",
    "name": "GNA Axles Ltd."
  },
  {
    "symbol": "GOCLCORP",
    "name": "GOCL Corporation Ltd."
  },
  {
    "symbol": "GODAVARIB",
    "name": "Godavari Biorefineries Ltd."
  },
  {
    "symbol": "GOLDIAM",
    "name": "Goldiam International Ltd."
  },
  {
    "symbol": "GOODLUCK",
    "name": "Goodluck India Ltd."
  },
  {
    "symbol": "GOODYEAR",
    "name": "Goodyear India Ltd."
  },
  {
    "symbol": "GPTHEALTH",
    "name": "GPT Healthcare Ltd."
  },
  {
    "symbol": "GPTINFRA",
    "name": "GPT Infraprojects Ltd."
  },
  {
    "symbol": "523862",
    "name": "Grand Oak Canyons Distillery Ltd."
  },
  {
    "symbol": "GRAUWEIL",
    "name": "Grauer & Weil (India) Ltd."
  },
  {
    "symbol": "GREENPANEL",
    "name": "Greenpanel Industries Ltd."
  },
  {
    "symbol": "GREENPLY",
    "name": "Greenply Industries Ltd."
  },
  {
    "symbol": "GRMOVER",
    "name": "GRM Overseas Ltd."
  },
  {
    "symbol": "GRPLTD",
    "name": "GRP Ltd."
  },
  {
    "symbol": "GTLINFRA",
    "name": "GTL Infrastructure Ltd."
  },
  {
    "symbol": "GTPL",
    "name": "GTPL Hathway Ltd."
  },
  {
    "symbol": "GUFICBIO",
    "name": "Gufic Biosciences Ltd."
  },
  {
    "symbol": "GIPCL",
    "name": "Gujarat Industries Power Company Ltd."
  },
  {
    "symbol": "513536",
    "name": "Gujarat Natural Resources Ltd."
  },
  {
    "symbol": "GUJTHEM",
    "name": "Gujarat Themis Biosyn Ltd."
  },
  {
    "symbol": "GULPOLY",
    "name": "Gulshan Polyols Ltd."
  },
  {
    "symbol": "526407",
    "name": "Hampton Sky Realty Ltd."
  },
  {
    "symbol": "HARDWYN",
    "name": "Hardwyn India Ltd."
  },
  {
    "symbol": "HARIOMPIPE",
    "name": "Hariom Pipe Industries Ltd."
  },
  {
    "symbol": "HARSHA",
    "name": "Harsha Engineers International Ltd."
  },
  {
    "symbol": "530927",
    "name": "Haryana Financial Corporation Ltd."
  },
  {
    "symbol": "HATHWAY",
    "name": "Hathway Cable & Datacom Ltd."
  },
  {
    "symbol": "532467",
    "name": "Hazoor Multi Projects Ltd."
  },
  {
    "symbol": "HERANBA",
    "name": "Heranba Industries Ltd."
  },
  {
    "symbol": "HESTERBIO",
    "name": "Hester Biosciences Ltd."
  },
  {
    "symbol": "HEUBACHIND",
    "name": "Heubach Colorants India Ltd."
  },
  {
    "symbol": "HEXATRADEX",
    "name": "Hexa Tradex Ltd."
  },
  {
    "symbol": "HITECH",
    "name": "Hi-Tech Pipes Ltd."
  },
  {
    "symbol": "HIMATSEIDE",
    "name": "Himatsingka Seide Ltd."
  },
  {
    "symbol": "HIRECT",
    "name": "Hind Rectifiers Ltd."
  },
  {
    "symbol": "HGS",
    "name": "Hinduja Global Solutions Ltd."
  },
  {
    "symbol": "HINDCOMPOS",
    "name": "Hindustan Composites Ltd."
  },
  {
    "symbol": "HINDOILEXP",
    "name": "Hindustan Oil Exploration Company Ltd."
  },
  {
    "symbol": "HINDWAREAP",
    "name": "Hindware Home Innovation Ltd."
  },
  {
    "symbol": "HLEGLAS",
    "name": "HLE Glascoat Ltd."
  },
  {
    "symbol": "HLVLTD",
    "name": "HLV Ltd."
  },
  {
    "symbol": "HMAAGRO",
    "name": "HMA Agro Industries Ltd."
  },
  {
    "symbol": "HONDAPOWER",
    "name": "Honda India Power Products Ltd."
  },
  {
    "symbol": "HPL",
    "name": "HPL Electric & Power Ltd."
  },
  {
    "symbol": "HUBTOWN",
    "name": "Hubtown Ltd."
  },
  {
    "symbol": "HUHTAMAKI",
    "name": "Huhtamaki India Ltd."
  },
  {
    "symbol": "ICEMAKE",
    "name": "ICE Make Refrigeration Ltd."
  },
  {
    "symbol": "IDEAFORGE",
    "name": "Ideaforge Technology Ltd."
  },
  {
    "symbol": "IFBAGRO",
    "name": "IFB Agro Industries Ltd."
  },
  {
    "symbol": "IFGLEXPOR",
    "name": "IFGL Refractories Ltd."
  },
  {
    "symbol": "IGPL",
    "name": "IG Petrochemicals Ltd."
  },
  {
    "symbol": "IGARASHI",
    "name": "Igarashi Motors India Ltd."
  },
  {
    "symbol": "IKIO",
    "name": "IKIO Technologies Ltd."
  },
  {
    "symbol": "BAJAJINDEF",
    "name": "Indef Manufacturing Ltd."
  },
  {
    "symbol": "IMPAL",
    "name": "India Motor Parts & Accessories Ltd."
  },
  {
    "symbol": "INDNIPPON",
    "name": "India Nippon Electricals Ltd."
  },
  {
    "symbol": "IPL",
    "name": "India Pesticides Ltd."
  },
  {
    "symbol": "DPSCLTD",
    "name": "India Power Corporation Ltd."
  },
  {
    "symbol": "INDIANHUME",
    "name": "Indian Hume Pipe Company Ltd."
  },
  {
    "symbol": "IMFA",
    "name": "Indian Metals & Ferro Alloys Ltd."
  },
  {
    "symbol": "INDOAMIN",
    "name": "Indo Amines Ltd."
  },
  {
    "symbol": "INDOFARM",
    "name": "Indo Farm Equipments Ltd."
  },
  {
    "symbol": "INDORAMA",
    "name": "Indo Rama Synthetics (India) Ltd."
  },
  {
    "symbol": "INDOTECH",
    "name": "Indo Tech Transformers Ltd."
  },
  {
    "symbol": "INDOTHAI",
    "name": "Indo Thai Securities Ltd."
  },
  {
    "symbol": "INDOCO",
    "name": "Indoco Remedies Ltd."
  },
  {
    "symbol": "INDRAMEDCO",
    "name": "Indraprastha Medical Corporation Ltd."
  },
  {
    "symbol": "501298",
    "name": "Industrial & Prudential Investment Company Ltd."
  },
  {
    "symbol": "INFOBEAN",
    "name": "Infobeans Technologies Ltd."
  },
  {
    "symbol": "INNOVANA",
    "name": "Innovana Thinklabs Ltd."
  },
  {
    "symbol": "INSECTICID",
    "name": "Insecticides (India) Ltd."
  },
  {
    "symbol": "505358",
    "name": "Integra Engineering India Ltd."
  },
  {
    "symbol": "INTERARCH",
    "name": "Interarch Building Solutions Ltd."
  },
  {
    "symbol": "IOLCP",
    "name": "IOL Chemicals And Pharmaceuticals Ltd."
  },
  {
    "symbol": "IRMENERGY",
    "name": "IRM Energy Ltd."
  },
  {
    "symbol": "508807",
    "name": "IST Ltd."
  },
  {
    "symbol": "JAGAJITIND",
    "name": "Jagatjit Industries Ltd."
  },
  {
    "symbol": "JAGRAN",
    "name": "Jagran Prakashan Ltd."
  },
  {
    "symbol": "JAGSNPHARM",
    "name": "Jagsonpal Pharmaceuticals Ltd."
  },
  {
    "symbol": "JAICORPLTD",
    "name": "Jai Corp Ltd."
  },
  {
    "symbol": "JPASSOCIAT",
    "name": "Jaiprakash Associates Ltd."
  },
  {
    "symbol": "JAMNAAUTO",
    "name": "Jamna Auto Industries Ltd."
  },
  {
    "symbol": "JASH",
    "name": "Jash Engineering Ltd."
  },
  {
    "symbol": "JAYBARMARU",
    "name": "Jay Bharat Maruti Ltd."
  },
  {
    "symbol": "JAYAGROGN",
    "name": "Jayant Agro-Organics Ltd."
  },
  {
    "symbol": "JAYNECOIND",
    "name": "Jayaswal Neco Industries Ltd."
  },
  {
    "symbol": "512233",
    "name": "Jaybharat Textiles & Real Estate Ltd."
  },
  {
    "symbol": "JKSYNTHETC",
    "name": "Jaykay Enterprises Ltd."
  },
  {
    "symbol": "JGCHEM",
    "name": "JG Chemicals Ltd."
  },
  {
    "symbol": "JINDRILL",
    "name": "Jindal Drilling & Industries Ltd."
  },
  {
    "symbol": "JINDALPHOT",
    "name": "Jindal Photo Ltd."
  },
  {
    "symbol": "JINDALPOLY",
    "name": "Jindal Poly Films Ltd."
  },
  {
    "symbol": "JPOLYINVST",
    "name": "Jindal Poly Investment and Finance Company Ltd."
  },
  {
    "symbol": "JITFINFRA",
    "name": "JITF Infralogistics Ltd."
  },
  {
    "symbol": "JNKINDIA",
    "name": "JNK India Ltd."
  },
  {
    "symbol": "FLATPROD",
    "name": "John Cockerill India Ltd"
  },
  {
    "symbol": "JTEKTINDIA",
    "name": "JTEKT India Ltd."
  },
  {
    "symbol": "JTLIND",
    "name": "JTL Industries Ltd"
  },
  {
    "symbol": "JUBLCPL",
    "name": "Jubilant Agri And Consumer Products Ltd."
  },
  {
    "symbol": "514448",
    "name": "Jyoti Resins & Adhesives Ltd."
  },
  {
    "symbol": "JYOTISTRUC",
    "name": "Jyoti Structures Ltd."
  },
  {
    "symbol": "KABRAEXTRU",
    "name": "Kabra Extrusiontechnik Ltd."
  },
  {
    "symbol": "KICL",
    "name": "Kalyani Investment Company Ltd."
  },
  {
    "symbol": "KSL",
    "name": "Kalyani Steels Ltd."
  },
  {
    "symbol": "KAMDHENU",
    "name": "Kamdhenu Ltd."
  },
  {
    "symbol": "KARNIKA",
    "name": "Karnika Industries Ltd."
  },
  {
    "symbol": "KCP",
    "name": "KCP Ltd."
  },
  {
    "symbol": "KDDL",
    "name": "KDDL Ltd."
  },
  {
    "symbol": "KELLTONTEC",
    "name": "Kellton Tech Solutions Ltd."
  },
  {
    "symbol": "KERNEX",
    "name": "Kernex Microsystems (India) Ltd."
  },
  {
    "symbol": "543542",
    "name": "Kesar India Ltd."
  },
  {
    "symbol": "KKCL",
    "name": "Kewal Kiran Clothing Ltd."
  },
  {
    "symbol": "KHAICHEM",
    "name": "Khaitan Chemicals & Fertilizers Ltd."
  },
  {
    "symbol": "543953",
    "name": "Khazanchi Jewellers Ltd."
  },
  {
    "symbol": "KILBUNENGG",
    "name": "Kilburn Engineering Ltd."
  },
  {
    "symbol": "KILITCH",
    "name": "Kilitch Drugs (India) Ltd."
  },
  {
    "symbol": "KINGFA",
    "name": "Kingfa Science & Technology (India) Ltd."
  },
  {
    "symbol": "KIRIINDUS",
    "name": "Kiri Industries Ltd."
  },
  {
    "symbol": "KECL",
    "name": "Kirloskar Electric Company Ltd."
  },
  {
    "symbol": "524520",
    "name": "KMC Speciality Hospitals (India) Ltd."
  },
  {
    "symbol": "KMEW",
    "name": "Knowledge Marine & Engineering Works Ltd."
  },
  {
    "symbol": "KODYTECH",
    "name": "Kody Technolab Ltd."
  },
  {
    "symbol": "KOKUYOCMLN",
    "name": "Kokuyo Camlin Ltd."
  },
  {
    "symbol": "KOLTEPATIL",
    "name": "Kolte-Patil Developers Ltd."
  },
  {
    "symbol": "KOPRAN",
    "name": "Kopran Ltd."
  },
  {
    "symbol": "KOTHARINDL",
    "name": "Kothari Industrial Corporation Ltd."
  },
  {
    "symbol": "KOTHARIPET",
    "name": "Kothari Petrochemicals Ltd."
  },
  {
    "symbol": "KOVAI",
    "name": "Kovai Medical Center & Hospital Ltd."
  },
  {
    "symbol": "KPEL",
    "name": "KP Energy Ltd."
  },
  {
    "symbol": "544150",
    "name": "KP Green Engineering Ltd."
  },
  {
    "symbol": "KRISHANA",
    "name": "Krishana Phoschem Ltd."
  },
  {
    "symbol": "KRISHIVAL",
    "name": "Krishival Foods Ltd."
  },
  {
    "symbol": "KRISHNADEF",
    "name": "Krishna Defence and Allied Industries Ltd."
  },
  {
    "symbol": "KRITI",
    "name": "Kriti Industries (India) Ltd."
  },
  {
    "symbol": "KROSS",
    "name": "Kross Ltd."
  },
  {
    "symbol": "KRSNAA",
    "name": "Krsnaa Diagnostics Ltd."
  },
  {
    "symbol": "KRYSTAL",
    "name": "Krystal Integrated Services Ltd"
  },
  {
    "symbol": "KSE",
    "name": "KSE Ltd."
  },
  {
    "symbol": "KSOLVES",
    "name": "KSolves India Ltd."
  },
  {
    "symbol": "KUANTUM",
    "name": "Kuantum Papers Ltd."
  },
  {
    "symbol": "539997",
    "name": "Kwality Pharmaceuticals Ltd."
  },
  {
    "symbol": "LAOPALA",
    "name": "La Opala RG Ltd."
  },
  {
    "symbol": "LANCER",
    "name": "Lancer Container Lines Ltd."
  },
  {
    "symbol": "LANDMARK",
    "name": "Landmark Cars Ltd."
  },
  {
    "symbol": "LAXMIDENTL",
    "name": "Laxmi Dental Ltd."
  },
  {
    "symbol": "LGHL",
    "name": "Laxmi Goldorna House Ltd."
  },
  {
    "symbol": "LEMERITE",
    "name": "Le Merite Exports Ltd."
  },
  {
    "symbol": "LIBERTSHOE",
    "name": "Liberty Shoes Ltd."
  },
  {
    "symbol": "LIKHITHA",
    "name": "Likhitha Infrastructure Ltd."
  },
  {
    "symbol": "LINC",
    "name": "Linc Ltd."
  },
  {
    "symbol": "LINCOLN",
    "name": "Lincoln Pharmaceuticals Ltd."
  },
  {
    "symbol": "523475",
    "name": "Lotus Chocolate Company Ltd."
  },
  {
    "symbol": "514446",
    "name": "LS Industries Ltd."
  },
  {
    "symbol": "539682",
    "name": "Lucent Industries Ltd."
  },
  {
    "symbol": "LUMAXIND",
    "name": "Lumax Industries Ltd."
  },
  {
    "symbol": "507836",
    "name": "Mac Charles (India) Ltd."
  },
  {
    "symbol": "543787",
    "name": "Macfos Ltd."
  },
  {
    "symbol": "MACPOWER",
    "name": "Macpower CNC Machines Ltd."
  },
  {
    "symbol": "MBAPL",
    "name": "Madhya Bharat Agro Products Ltd."
  },
  {
    "symbol": "MADRASFERT",
    "name": "Madras Fertilizers Ltd."
  },
  {
    "symbol": "MAFATLAIND",
    "name": "Mafatlal Industries Ltd."
  },
  {
    "symbol": "MAGADSUGAR",
    "name": "Magadh Sugar & Energy Ltd."
  },
  {
    "symbol": "MTNL",
    "name": "Mahanagar Telephone Nigam Ltd."
  },
  {
    "symbol": "MAHLOG",
    "name": "Mahindra Logistics Ltd."
  },
  {
    "symbol": "MAITHANALL",
    "name": "Maithan Alloys Ltd."
  },
  {
    "symbol": "MAMATA",
    "name": "Mamata Machinery Ltd."
  },
  {
    "symbol": "MANINDS",
    "name": "Man Industries (India) Ltd."
  },
  {
    "symbol": "MANAKCOAT",
    "name": "Manaksia Coated Metals & Industries Ltd."
  },
  {
    "symbol": "MANALIPETC",
    "name": "Manali Petrochemicals Ltd."
  },
  {
    "symbol": "MANGLMCEM",
    "name": "Mangalam Cement Ltd."
  },
  {
    "symbol": "MANGCHEFER",
    "name": "Mangalore Chemicals & Fertilizers Ltd."
  },
  {
    "symbol": "MVGJL",
    "name": "Manoj Vaibhav Gems ''N'' Jewellers Ltd."
  },
  {
    "symbol": "MARATHON",
    "name": "Marathon Nextgen Realty Ltd."
  },
  {
    "symbol": "MARINE",
    "name": "Marine Electricals (India) Ltd."
  },
  {
    "symbol": "517467",
    "name": "Marsons Ltd."
  },
  {
    "symbol": "MASTERTR",
    "name": "Master Trust Ltd."
  },
  {
    "symbol": "MATRIMONY",
    "name": "Matrimony.Com Ltd."
  },
  {
    "symbol": "MAXIND",
    "name": "Max India Ltd."
  },
  {
    "symbol": "MAYURUNIQ",
    "name": "Mayur Uniquoters Ltd."
  },
  {
    "symbol": "MEDIASSIST",
    "name": "Medi Assist Healthcare Services Ltd."
  },
  {
    "symbol": "MMWL",
    "name": "Media Matrix Worldwide Ltd"
  },
  {
    "symbol": "MOL",
    "name": "Meghmani Organics Ltd."
  },
  {
    "symbol": "538668",
    "name": "Meghna Infracon Infrastructure Ltd."
  },
  {
    "symbol": "531357",
    "name": "Mercury Ev-Tech Ltd."
  },
  {
    "symbol": "MICEL",
    "name": "MIC Electronics Ltd."
  },
  {
    "symbol": "526570",
    "name": "Midwest Gold Ltd."
  },
  {
    "symbol": "MINDTECK",
    "name": "Mindteck (India) Ltd."
  },
  {
    "symbol": "MMFL",
    "name": "MM Forgings Ltd."
  },
  {
    "symbol": "519003",
    "name": "Modi Naturals Ltd."
  },
  {
    "symbol": "MOLDTKPAC",
    "name": "Mold-Tek Packaging Ltd."
  },
  {
    "symbol": "MONARCH",
    "name": "Monarch Networth Capital Ltd."
  },
  {
    "symbol": "MONTECARLO",
    "name": "Monte Carlo Fashions Ltd."
  },
  {
    "symbol": "MOREPENLAB",
    "name": "Morepen Laboratories Ltd."
  },
  {
    "symbol": "523160",
    "name": "Morganite Crucible (India) Ltd."
  },
  {
    "symbol": "MOS",
    "name": "MOS Utility Ltd."
  },
  {
    "symbol": "MOSCHIP",
    "name": "Moschip Technologies Ltd."
  },
  {
    "symbol": "MOTISONS",
    "name": "Motisons Jewellers Ltd."
  },
  {
    "symbol": "MSPL",
    "name": "MSP Steel & Power Ltd."
  },
  {
    "symbol": "MSTCLTD",
    "name": "MSTC Ltd."
  },
  {
    "symbol": "MUFIN",
    "name": "Mufin Green Finance Ltd."
  },
  {
    "symbol": "MUKANDLTD",
    "name": "Mukand Ltd."
  },
  {
    "symbol": "MUKKA",
    "name": "Mukka Proteins Ltd."
  },
  {
    "symbol": "MUNJALAU",
    "name": "Munjal Auto Industries Ltd."
  },
  {
    "symbol": "MUTHOOTMF",
    "name": "Muthoot Microfin Ltd."
  },
  {
    "symbol": "NBIFIN",
    "name": "N.B.I. Industrial Finance Co. Ltd."
  },
  {
    "symbol": "NACLIND",
    "name": "NACL Industries Ltd."
  },
  {
    "symbol": "NAHARPOLY",
    "name": "Nahar Poly Films Ltd."
  },
  {
    "symbol": "NAHARSPING",
    "name": "Nahar Spinning Mills Ltd."
  },
  {
    "symbol": "NSIL",
    "name": "Nalwa Sons Investments Ltd."
  },
  {
    "symbol": "NAVKARCORP",
    "name": "Navkar Corporation Ltd."
  },
  {
    "symbol": "NAVNETEDUL",
    "name": "Navneet Education Ltd."
  },
  {
    "symbol": "NCLIND",
    "name": "NCL Industries Ltd."
  },
  {
    "symbol": "NDRAUTO",
    "name": "NDR Auto Components Ltd."
  },
  {
    "symbol": "NELCAST",
    "name": "Nelcast Ltd."
  },
  {
    "symbol": "NELCO",
    "name": "Nelco Ltd."
  },
  {
    "symbol": "NDTV",
    "name": "New Delhi Television Ltd."
  },
  {
    "symbol": "NIBE",
    "name": "NIBE Ltd."
  },
  {
    "symbol": "NIITLTD",
    "name": "NIIT Ltd."
  },
  {
    "symbol": "NILKAMAL",
    "name": "Nilkamal Ltd."
  },
  {
    "symbol": "NINSYS",
    "name": "Nintec Systems Ltd."
  },
  {
    "symbol": "NITCO",
    "name": "Nitco Ltd."
  },
  {
    "symbol": "NITINSPIN",
    "name": "Nitin Spinners Ltd."
  },
  {
    "symbol": "KERALACHEM",
    "name": "Nitta Gelatin India Ltd."
  },
  {
    "symbol": "NOCIL",
    "name": "Nocil Ltd."
  },
  {
    "symbol": "NORTHARC",
    "name": "Northern ARC Capital Ltd."
  },
  {
    "symbol": "NOVARTIND",
    "name": "Novartis India Ltd."
  },
  {
    "symbol": "NRBBEARING",
    "name": "NRB Bearings Ltd."
  },
  {
    "symbol": "NUCLEUS",
    "name": "Nucleus Software Exports Ltd."
  },
  {
    "symbol": "OMINFRAL",
    "name": "Om Infra Ltd."
  },
  {
    "symbol": "OMAXE",
    "name": "Omaxe Ltd."
  },
  {
    "symbol": "MOBIKWIK",
    "name": "One Mobikwik Systems Ltd."
  },
  {
    "symbol": "ONEPOINT",
    "name": "One Point One Solutions Ltd."
  },
  {
    "symbol": "ORCHPHARMA",
    "name": "Orchid Pharma Ltd."
  },
  {
    "symbol": "ORICONENT",
    "name": "Oricon Enterprises Ltd."
  },
  {
    "symbol": "GREENPOWER",
    "name": "Orient Green Power Company Ltd."
  },
  {
    "symbol": "ORIENTTECH",
    "name": "Orient Technologies Ltd."
  },
  {
    "symbol": "OAL",
    "name": "Oriental Aromatics Ltd."
  },
  {
    "symbol": "ORIENTHOT",
    "name": "Oriental Hotels Ltd."
  },
  {
    "symbol": "531859",
    "name": "Oriental Rail Infrastructure Ltd."
  },
  {
    "symbol": "OSWALAGRO",
    "name": "Oswal Agro Mills Ltd."
  },
  {
    "symbol": "OSWALGREEN",
    "name": "Oswal Greentech Ltd."
  },
  {
    "symbol": "OWAIS",
    "name": "Owais Metal & Mineral Processing Ltd."
  },
  {
    "symbol": "PAISALO",
    "name": "Paisalo Digital Ltd."
  },
  {
    "symbol": "PAKKA",
    "name": "Pakka Ltd."
  },
  {
    "symbol": "PANACEABIO",
    "name": "Panacea Biotec Ltd."
  },
  {
    "symbol": "PANAMAPET",
    "name": "Panama Petrochem Ltd."
  },
  {
    "symbol": "539469",
    "name": "Panorama Studios International Ltd."
  },
  {
    "symbol": "PARAGMILK",
    "name": "Parag Milk Foods Ltd."
  },
  {
    "symbol": "PARACABLES",
    "name": "Paramount Communications Ltd."
  },
  {
    "symbol": "PARSVNATH",
    "name": "Parsvnath Developers Ltd."
  },
  {
    "symbol": "PASHUPATI",
    "name": "Pashupati Cotspin Ltd."
  },
  {
    "symbol": "PATELENG",
    "name": "Patel Engineering Ltd."
  },
  {
    "symbol": "532742",
    "name": "Paushak Ltd."
  },
  {
    "symbol": "PENINLAND",
    "name": "Peninsula Land Ltd."
  },
  {
    "symbol": "PENIND",
    "name": "Pennar Industries Ltd."
  },
  {
    "symbol": "PERMAGNET",
    "name": "Permanent Magnets Ltd."
  },
  {
    "symbol": "PITTIENG",
    "name": "Pitti Engineering Ltd."
  },
  {
    "symbol": "PIXTRANS",
    "name": "Pix Transmissions Ltd."
  },
  {
    "symbol": "PLATIND",
    "name": "Platinum Industries Ltd."
  },
  {
    "symbol": "PNBGILTS",
    "name": "PNB Gilts Ltd."
  },
  {
    "symbol": "543709",
    "name": "PNGS Gargi Fashion Jewellery Ltd."
  },
  {
    "symbol": "POKARNA",
    "name": "Pokarna Ltd."
  },
  {
    "symbol": "540717",
    "name": "Polo Queen Industrial & Fintech Ltd."
  },
  {
    "symbol": "POCL",
    "name": "Pondy Oxides & Chemicals Ltd."
  },
  {
    "symbol": "PVSL",
    "name": "Popular Vehicles & Services Ltd."
  },
  {
    "symbol": "PRABHA",
    "name": "Prabha Energy Ltd"
  },
  {
    "symbol": "PRAKASH",
    "name": "Prakash Industries Ltd."
  },
  {
    "symbol": "PPL",
    "name": "Prakash Pipes Ltd."
  },
  {
    "symbol": "DIAMONDYD",
    "name": "Prataap Snacks Ltd."
  },
  {
    "symbol": "531637",
    "name": "Praveg Ltd."
  },
  {
    "symbol": "PRECAM",
    "name": "Precision Camshafts Ltd."
  },
  {
    "symbol": "PRECWIRE",
    "name": "Precision Wires India Ltd."
  },
  {
    "symbol": "PREMEXPLN",
    "name": "Premier Explosives Ltd."
  },
  {
    "symbol": "PFOCUS",
    "name": "Prime Focus Ltd."
  },
  {
    "symbol": "PRIMESECU",
    "name": "Prime Securities Ltd."
  },
  {
    "symbol": "PRINCEPIPE",
    "name": "Prince Pipes and Fittings Ltd."
  },
  {
    "symbol": "PROTEAN",
    "name": "Protean e-Gov Technologies Ltd."
  },
  {
    "symbol": "PSPPROJECT",
    "name": "PSP Projects Ltd."
  },
  {
    "symbol": "PFS",
    "name": "PTC India Financial Services Ltd."
  },
  {
    "symbol": "PDMJEPAPER",
    "name": "Pudumjee Paper Products Ltd."
  },
  {
    "symbol": "PUNJABCHEM",
    "name": "Punjab Chemicals & Crop Protection Ltd."
  },
  {
    "symbol": "QUADFUTURE",
    "name": "Quadrant Future Tek Ltd."
  },
  {
    "symbol": "QPOWER",
    "name": "Quality Power Electrical Equipments Ltd."
  },
  {
    "symbol": "QUICKHEAL",
    "name": "Quick Heal Technologies Ltd."
  },
  {
    "symbol": "538119",
    "name": "R&B Denims Ltd."
  },
  {
    "symbol": "RACLGEAR",
    "name": "RACL Geartech Ltd."
  },
  {
    "symbol": "RADHIKAJWE",
    "name": "Radhika Jeweltech Ltd."
  },
  {
    "symbol": "RADIANTCMS",
    "name": "Radiant Cash Management Services Ltd."
  },
  {
    "symbol": "RPEL",
    "name": "Raghav Productivity Enhancers Ltd."
  },
  {
    "symbol": "RAJRILTD",
    "name": "Raj Rayon Industries Ltd."
  },
  {
    "symbol": "RAJPALAYAM",
    "name": "Rajapalayam Mills Ltd."
  },
  {
    "symbol": "544291",
    "name": "Rajesh Power Services Ltd."
  },
  {
    "symbol": "RAJOOENG",
    "name": "Rajoo Engineers Ltd."
  },
  {
    "symbol": "RAJRATAN",
    "name": "Rajratan Global Wire Ltd."
  },
  {
    "symbol": "RAMRAT",
    "name": "Ram Ratna Wires Ltd."
  },
  {
    "symbol": "RAMASTEEL",
    "name": "Rama Steel Tubes Ltd."
  },
  {
    "symbol": "RAMCOIND",
    "name": "Ramco Industries Ltd."
  },
  {
    "symbol": "RAMCOSYS",
    "name": "Ramco Systems Ltd."
  },
  {
    "symbol": "RAMKY",
    "name": "Ramky Infrastructure Ltd."
  },
  {
    "symbol": "RML",
    "name": "Rane (Madras) Ltd."
  },
  {
    "symbol": "RANEHOLDIN",
    "name": "Rane Holdings Ltd."
  },
  {
    "symbol": "RPTECH",
    "name": "Rashi Peripherals Ltd."
  },
  {
    "symbol": "RATNAVEER",
    "name": "Ratnaveer Precision Engineering Ltd."
  },
  {
    "symbol": "RELTD",
    "name": "Ravindra Energy Ltd."
  },
  {
    "symbol": "533285",
    "name": "RDB Infrastructure And Power Ltd."
  },
  {
    "symbol": "RIIL",
    "name": "Reliance Industrial Infrastructure Ltd."
  },
  {
    "symbol": "REMUS",
    "name": "Remus Pharmaceuticals Ltd."
  },
  {
    "symbol": "RGL",
    "name": "Renaissance Global Ltd."
  },
  {
    "symbol": "REPCOHOME",
    "name": "Repco Home Finance Ltd."
  },
  {
    "symbol": "REPRO",
    "name": "Repro India Ltd."
  },
  {
    "symbol": "543590",
    "name": "Rhetan TMT Ltd."
  },
  {
    "symbol": "RICOAUTO",
    "name": "Rico Auto Industries Ltd."
  },
  {
    "symbol": "517035",
    "name": "RIR Power Electronics Ltd."
  },
  {
    "symbol": "RISHABH",
    "name": "Rishabh Instruments Ltd."
  },
  {
    "symbol": "RITCO",
    "name": "Ritco Logistics Ltd."
  },
  {
    "symbol": "RKSWAMY",
    "name": "RK Swamy Ltd."
  },
  {
    "symbol": "RMDRIP",
    "name": "RM Drip and Sprinklers System Ltd."
  },
  {
    "symbol": "540358",
    "name": "RMC Switchgears Ltd."
  },
  {
    "symbol": "ROSSARI",
    "name": "Rossari Biotech Ltd."
  },
  {
    "symbol": "ROSSTECH",
    "name": "Rossell Techsys Ltd."
  },
  {
    "symbol": "ROTO",
    "name": "Roto Pumps Ltd."
  },
  {
    "symbol": "ROHLTD",
    "name": "Royal Orchid Hotels Ltd."
  },
  {
    "symbol": "RPGLIFE",
    "name": "RPG Life Sciences Ltd."
  },
  {
    "symbol": "RPSGVENT",
    "name": "RPSG Ventures Ltd."
  },
  {
    "symbol": "504346",
    "name": "RRP Semiconductor Ltd."
  },
  {
    "symbol": "RSWM",
    "name": "RSWM Ltd."
  },
  {
    "symbol": "RUPA",
    "name": "Rupa & Company Ltd."
  },
  {
    "symbol": "RUSHIL",
    "name": "Rushil Decor Ltd."
  },
  {
    "symbol": "SCHAND",
    "name": "S Chand And Company Ltd."
  },
  {
    "symbol": "SPAL",
    "name": "S.P. Apparels Ltd."
  },
  {
    "symbol": "SAGCEM",
    "name": "Sagar Cements Ltd."
  },
  {
    "symbol": "SAHANA",
    "name": "Sahana System Ltd."
  },
  {
    "symbol": "SAHASRA",
    "name": "Sahasra Electronic Solutions Ltd."
  },
  {
    "symbol": "KALAMANDIR",
    "name": "Sai Silks (Kalamandir) Ltd."
  },
  {
    "symbol": "515043",
    "name": "Saint-Gobain Sekurit India Ltd."
  },
  {
    "symbol": "SAKSOFT",
    "name": "Saksoft Ltd."
  },
  {
    "symbol": "SALASAR",
    "name": "Salasar Techno Engineering Ltd."
  },
  {
    "symbol": "SALZERELEC",
    "name": "Salzer Electronics Ltd."
  },
  {
    "symbol": "SANATHAN",
    "name": "Sanathan Textiles Ltd."
  },
  {
    "symbol": "SANDHAR",
    "name": "Sandhar Technologies Ltd."
  },
  {
    "symbol": "SANGAMIND",
    "name": "Sangam (India) Ltd."
  },
  {
    "symbol": "SANGHIIND",
    "name": "Sanghi Industries Ltd."
  },
  {
    "symbol": "SANGHVIMOV",
    "name": "Sanghvi Movers Ltd."
  },
  {
    "symbol": "SANSTAR",
    "name": "Sanstar Ltd."
  },
  {
    "symbol": "538992",
    "name": "Sar Auto Products Ltd."
  },
  {
    "symbol": "SARTELE",
    "name": "Sar Televenture Ltd."
  },
  {
    "symbol": "512020",
    "name": "Saraswati Commercial (India) Ltd."
  },
  {
    "symbol": "SARLAPOLY",
    "name": "Sarla Performance Fibers Ltd."
  },
  {
    "symbol": "SARVESHWAR",
    "name": "Sarveshwar Foods Ltd."
  },
  {
    "symbol": "SASKEN",
    "name": "Sasken Technologies Ltd."
  },
  {
    "symbol": "SASTASUNDR",
    "name": "Sastasundar Ventures Ltd."
  },
  {
    "symbol": "SSEGL",
    "name": "Sathlokhar Synergys E&C Global Ltd."
  },
  {
    "symbol": "SATIA",
    "name": "Satia Industries Ltd."
  },
  {
    "symbol": "SATIN",
    "name": "Satin Creditcare Network Ltd."
  },
  {
    "symbol": "SAURASHCEM",
    "name": "Saurashtra Cement Ltd."
  },
  {
    "symbol": "SOTL",
    "name": "Savita Oil Technologies Ltd."
  },
  {
    "symbol": "SBC",
    "name": "SBC Exports Ltd."
  },
  {
    "symbol": "SCODATUBES",
    "name": "Scoda Tubes Ltd."
  },
  {
    "symbol": "SEAMECLTD",
    "name": "Seamec Ltd."
  },
  {
    "symbol": "SELAN",
    "name": "Selan Exploration Technology Ltd."
  },
  {
    "symbol": "SENORES",
    "name": "Senores Pharmaceuticals Ltd."
  },
  {
    "symbol": "SEPC",
    "name": "SEPC Ltd."
  },
  {
    "symbol": "SERVOTECH",
    "name": "Servotech Renewable Power System Ltd."
  },
  {
    "symbol": "SESHAPAPER",
    "name": "Seshasayee Paper and Boards Ltd."
  },
  {
    "symbol": "539199",
    "name": "SG Finserve Ltd."
  },
  {
    "symbol": "SHK",
    "name": "SH Kelkar And Company Ltd."
  },
  {
    "symbol": "SHALBY",
    "name": "Shalby Ltd."
  },
  {
    "symbol": "539895",
    "name": "Shalimar Agencies Ltd."
  },
  {
    "symbol": "SHALPAINTS",
    "name": "Shalimar Paints Ltd."
  },
  {
    "symbol": "SHANKARA",
    "name": "Shankara Building Products Ltd."
  },
  {
    "symbol": "SHANTIGEAR",
    "name": "Shanthi Gears Ltd."
  },
  {
    "symbol": "539921",
    "name": "Shanti Educational Initiatives Ltd."
  },
  {
    "symbol": "SHAREINDIA",
    "name": "Share India Securities Ltd."
  },
  {
    "symbol": "SCILAL",
    "name": "Shipping Corporation of India Land and Assets Ltd."
  },
  {
    "symbol": "532323",
    "name": "Shiva Cement Ltd."
  },
  {
    "symbol": "SBCL",
    "name": "Shivalik Bimetal Controls Ltd."
  },
  {
    "symbol": "SHIVALIK",
    "name": "Shivalik Rasayan Ltd."
  },
  {
    "symbol": "SHREDIGCEM",
    "name": "Shree Digvijay Cement Company Ltd."
  },
  {
    "symbol": "540737",
    "name": "Shree Ganesh Remedies Ltd."
  },
  {
    "symbol": "SHREEPUSHK",
    "name": "Shree Pushkar Chemicals & Fertilisers Ltd."
  },
  {
    "symbol": "SVLL",
    "name": "Shree Vasu Logistics Ltd."
  },
  {
    "symbol": "512453",
    "name": "Shri Jagdamba Polymers Ltd."
  },
  {
    "symbol": "531359",
    "name": "Shriram Asset Management Company Ltd."
  },
  {
    "symbol": "SHRIRAMPPS",
    "name": "Shriram Properties Ltd."
  },
  {
    "symbol": "SIGACHI",
    "name": "Sigachi Industries Ltd."
  },
  {
    "symbol": "SIGNPOST",
    "name": "Signpost India Ltd."
  },
  {
    "symbol": "523606",
    "name": "Sika Interplant Systems Ltd."
  },
  {
    "symbol": "SILVERTUC",
    "name": "Silver Touch Technologies Ltd."
  },
  {
    "symbol": "SIMPLEXINF",
    "name": "Simplex Infrastructures Ltd."
  },
  {
    "symbol": "SINDHUTRAD",
    "name": "Sindhu Trade Links Ltd."
  },
  {
    "symbol": "SIRCA",
    "name": "SIRCA Paints India Ltd."
  },
  {
    "symbol": "SIYSIL",
    "name": "Siyaram Silk Mills Ltd."
  },
  {
    "symbol": "SJLOGISTIC",
    "name": "SJ Logistics (India) Ltd."
  },
  {
    "symbol": "SJS",
    "name": "SJS Enterprises Ltd."
  },
  {
    "symbol": "SMCGLOBAL",
    "name": "SMC Global Securities Ltd."
  },
  {
    "symbol": "SMLISUZU",
    "name": "SML Isuzu Ltd."
  },
  {
    "symbol": "SMSPHARMA",
    "name": "SMS Pharmaceuticals Ltd."
  },
  {
    "symbol": "SNOWMAN",
    "name": "Snowman Logistics Ltd."
  },
  {
    "symbol": "SOLARA",
    "name": "Solara Active Pharma Sciences Ltd."
  },
  {
    "symbol": "544354",
    "name": "Solarium Green Energy Ltd."
  },
  {
    "symbol": "SOLEX",
    "name": "Solex Energy Ltd."
  },
  {
    "symbol": "SDBL",
    "name": "Som Distilleries And Breweries Ltd."
  },
  {
    "symbol": "SOMANYCERA",
    "name": "Somany Ceramics Ltd."
  },
  {
    "symbol": "SPIC",
    "name": "Southern Petrochemical Industries Corporation Ltd."
  },
  {
    "symbol": "SPANDANA",
    "name": "Spandana Sphoorty Financial Ltd."
  },
  {
    "symbol": "SPECTRUM",
    "name": "Spectrum Electrical Industries Ltd."
  },
  {
    "symbol": "SPMLINFRA",
    "name": "SPML Infra Ltd."
  },
  {
    "symbol": "SPORTKING",
    "name": "Sportking India Ltd."
  },
  {
    "symbol": "SRHHYPOLTD",
    "name": "Sree Rayalaseema Hi-Strength Hypo Ltd."
  },
  {
    "symbol": "SABTNL",
    "name": "Sri Adhikari Brothers Television Network Ltd."
  },
  {
    "symbol": "SRM",
    "name": "SRM Contractors Ltd."
  },
  {
    "symbol": "SGLTL",
    "name": "Standard Glass Lining Technology Ltd."
  },
  {
    "symbol": "STANLEY",
    "name": "Stanley Lifestyles Ltd."
  },
  {
    "symbol": "STEELXIND",
    "name": "Steel Exchange India Ltd."
  },
  {
    "symbol": "SSWL",
    "name": "Steel Strips Wheels Ltd."
  },
  {
    "symbol": "STEELCAS",
    "name": "Steelcast Ltd."
  },
  {
    "symbol": "STEL",
    "name": "STEL Holdings Ltd."
  },
  {
    "symbol": "STERTOOLS",
    "name": "Sterling Tools Ltd."
  },
  {
    "symbol": "STLTECH",
    "name": "Sterlite Technologies Ltd."
  },
  {
    "symbol": "STOVEKRAFT",
    "name": "Stove Kraft Ltd."
  },
  {
    "symbol": "534535",
    "name": "String Metaverse Ltd."
  },
  {
    "symbol": "STYLAMIND",
    "name": "Stylam Industries Ltd."
  },
  {
    "symbol": "SUBEXLTD",
    "name": "Subex Ltd."
  },
  {
    "symbol": "543828",
    "name": "Sudarshan Pharma Industries Ltd."
  },
  {
    "symbol": "SULA",
    "name": "Sula Vineyards Ltd."
  },
  {
    "symbol": "SUMMITSEC",
    "name": "Summit Securities Ltd."
  },
  {
    "symbol": "SUNDROP",
    "name": "Sundrop Brands Ltd."
  },
  {
    "symbol": "539300",
    "name": "Sunrakshakk Industries India Ltd."
  },
  {
    "symbol": "SURAJEST",
    "name": "Suraj Estate Developers Ltd."
  },
  {
    "symbol": "SURAJLTD",
    "name": "Suraj Ltd."
  },
  {
    "symbol": "SURAKSHA",
    "name": "Suraksha Diagnostic Ltd."
  },
  {
    "symbol": "SURYODAY",
    "name": "Suryoday Small Finance Bank Ltd."
  },
  {
    "symbol": "SUYOG",
    "name": "Suyog Telematics Ltd."
  },
  {
    "symbol": "SWANDEF",
    "name": "Swan Defence and Heavy Industries Ltd."
  },
  {
    "symbol": "SWELECTES",
    "name": "Swelect Energy Systems Ltd."
  },
  {
    "symbol": "SYNCOMF",
    "name": "Syncom Formulations (India) Ltd."
  },
  {
    "symbol": "SGIL",
    "name": "Synergy Green Industries Ltd."
  },
  {
    "symbol": "526506",
    "name": "Systematix Corporate Services Ltd."
  },
  {
    "symbol": "539956",
    "name": "TAAL Enterprises Ltd."
  },
  {
    "symbol": "TAC",
    "name": "TAC Infosec Ltd."
  },
  {
    "symbol": "TAJGVK",
    "name": "Taj GVK Hotels & Resorts Ltd."
  },
  {
    "symbol": "TALBROAUTO",
    "name": "Talbros Automotive Components Ltd."
  },
  {
    "symbol": "TNPL",
    "name": "Tamil Nadu Newsprint & Papers Ltd."
  },
  {
    "symbol": "TNPETRO",
    "name": "Tamilnadu Petroproducts Ltd."
  },
  {
    "symbol": "TANEJAERO",
    "name": "Taneja Aerospace & Aviation Ltd."
  },
  {
    "symbol": "TANFACIND",
    "name": "Tanfac Industries Ltd."
  },
  {
    "symbol": "TARSONS",
    "name": "Tarsons Products Ltd."
  },
  {
    "symbol": "TASTYBITE",
    "name": "Tasty Bite Eatables Ltd."
  },
  {
    "symbol": "TATVA",
    "name": "Tatva Chintan Pharma Chem Ltd."
  },
  {
    "symbol": "512038",
    "name": "TCC Concept Ltd."
  },
  {
    "symbol": "TCIEXP",
    "name": "TCI Express Ltd."
  },
  {
    "symbol": "TCPLPACK",
    "name": "TCPL Packaging Ltd."
  },
  {
    "symbol": "TEAMLEASE",
    "name": "TeamLease Services Ltd."
  },
  {
    "symbol": "501421",
    "name": "TechNVision Ventures Ltd."
  },
  {
    "symbol": "TEMBO",
    "name": "Tembo Global Industries Ltd."
  },
  {
    "symbol": "TEXINFRA",
    "name": "Texmaco Infrastructure & Holdings Ltd."
  },
  {
    "symbol": "SREERAYALK",
    "name": "TGV SRACC Ltd."
  },
  {
    "symbol": "ANDHRSUGAR",
    "name": "The Andhra Sugars Ltd."
  },
  {
    "symbol": "HITECHGEAR",
    "name": "The Hi-Tech Gears Ltd."
  },
  {
    "symbol": "THEINVEST",
    "name": "The Investment Trust of India Ltd."
  },
  {
    "symbol": "ORISSAMINE",
    "name": "The Orissa Minerals Development Company Ltd."
  },
  {
    "symbol": "RUBYMILLS",
    "name": "The Ruby Mills Ltd."
  },
  {
    "symbol": "SANDESH",
    "name": "The Sandesh Ltd."
  },
  {
    "symbol": "STCINDIA",
    "name": "The State Trading Corporation Of India Ltd."
  },
  {
    "symbol": "540980",
    "name": "The Yamuna Syndicate Ltd."
  },
  {
    "symbol": "THEJO",
    "name": "Thejo Engineering Ltd."
  },
  {
    "symbol": "THEMISMED",
    "name": "Themis Medicare Ltd."
  },
  {
    "symbol": "TIRUMALCHM",
    "name": "Thirumalai Chemicals Ltd."
  },
  {
    "symbol": "TIL",
    "name": "TIL Ltd."
  },
  {
    "symbol": "TIMEXWATCH",
    "name": "Timex Group India Ltd."
  },
  {
    "symbol": "TINNARUBR",
    "name": "Tinna Rubber And Infrastructure Ltd."
  },
  {
    "symbol": "TFCILTD",
    "name": "Tourism Finance Corporation Of India Ltd."
  },
  {
    "symbol": "TREL",
    "name": "Transindia Real Estate Ltd."
  },
  {
    "symbol": "TRANSPEK",
    "name": "Transpek Industry Ltd."
  },
  {
    "symbol": "TBZ",
    "name": "Tribhovandas Bhimji Zaveri Ltd."
  },
  {
    "symbol": "TECHLABS",
    "name": "Trident Techlabs Ltd."
  },
  {
    "symbol": "TTKHLTCARE",
    "name": "TTK Healthcare Ltd."
  },
  {
    "symbol": "TUTICORALK",
    "name": "Tuticorin Alkali Chemicals and Fertilizers Ltd."
  },
  {
    "symbol": "TVTODAY",
    "name": "TV Today Network Ltd."
  },
  {
    "symbol": "TVSELECT",
    "name": "TVS Electronics Ltd."
  },
  {
    "symbol": "TVSSRICHAK",
    "name": "TVS Srichakra Ltd."
  },
  {
    "symbol": "UDAICEMENT",
    "name": "Udaipur Cement Works Ltd."
  },
  {
    "symbol": "UGROCAP",
    "name": "Ugro Capital Ltd."
  },
  {
    "symbol": "UEL",
    "name": "Ujaas Energy Ltd."
  },
  {
    "symbol": "ULTRMARINE",
    "name": "Ultramarine & Pigments Ltd."
  },
  {
    "symbol": "UNIECOM",
    "name": "Unicommerce eSolutions Ltd."
  },
  {
    "symbol": "UNIPARTS",
    "name": "Uniparts India Ltd."
  },
  {
    "symbol": "UNIENTER",
    "name": "Uniphos Enterprises Ltd."
  },
  {
    "symbol": "UNITECH",
    "name": "Unitech Ltd."
  },
  {
    "symbol": "UNIVCABLES",
    "name": "Universal Cables Ltd."
  },
  {
    "symbol": "509960",
    "name": "UP Hotels Ltd."
  },
  {
    "symbol": "UDS",
    "name": "Updater Services Ltd."
  },
  {
    "symbol": "URJA",
    "name": "Urja Global Ltd."
  },
  {
    "symbol": "UTKARSHBNK",
    "name": "Utkarsh Small Finance Bank Ltd."
  },
  {
    "symbol": "UTTAMSUGAR",
    "name": "Uttam Sugar Mills Ltd."
  },
  {
    "symbol": "VMARCIND",
    "name": "V-Marc India Ltd."
  },
  {
    "symbol": "VSTTILLERS",
    "name": "V.S.T. Tillers Tractors Ltd."
  },
  {
    "symbol": "519152",
    "name": "Vadilal Enterprises Ltd."
  },
  {
    "symbol": "VADILALIND",
    "name": "Vadilal Industries Ltd."
  },
  {
    "symbol": "VAKRANGEE",
    "name": "Vakrangee Ltd."
  },
  {
    "symbol": "VALIANTORG",
    "name": "Valiant Organics Ltd."
  },
  {
    "symbol": "VHL",
    "name": "Vardhman Holdings Ltd."
  },
  {
    "symbol": "VSSL",
    "name": "Vardhman Special Steels Ltd."
  },
  {
    "symbol": "DENTALKART",
    "name": "Vasa Denticity Ltd."
  },
  {
    "symbol": "VASCONEQ",
    "name": "Vascon Engineers Ltd."
  },
  {
    "symbol": "VEEDOL",
    "name": "Veedol Corporation Ltd."
  },
  {
    "symbol": "543931",
    "name": "Veefin Solutions Ltd."
  },
  {
    "symbol": "VENKEYS",
    "name": "Venky''S (India) Ltd."
  },
  {
    "symbol": "VENUSPIPES",
    "name": "Venus Pipes & Tubes Ltd."
  },
  {
    "symbol": "VERANDA",
    "name": "Veranda Learning Solutions Ltd."
  },
  {
    "symbol": "512229",
    "name": "Veritas (India) Ltd."
  },
  {
    "symbol": "VERTOZ",
    "name": "Vertoz Ltd."
  },
  {
    "symbol": "VIDHIING",
    "name": "Vidhi Specialty Food Ingredients Ltd."
  },
  {
    "symbol": "VILAS",
    "name": "Vilas Transcore Ltd."
  },
  {
    "symbol": "VIMTALABS",
    "name": "Vimta Labs Ltd."
  },
  {
    "symbol": "VINDHYATEL",
    "name": "Vindhya Telelinks Ltd."
  },
  {
    "symbol": "VINCOFE",
    "name": "Vintage Coffee & Beverages Ltd."
  },
  {
    "symbol": "VINYAS",
    "name": "Vinyas Innovative Technologies Ltd."
  },
  {
    "symbol": "543597",
    "name": "Virtuoso Optoelectronics Ltd."
  },
  {
    "symbol": "VISAKAIND",
    "name": "Visaka Industries Ltd."
  },
  {
    "symbol": "VISHNU",
    "name": "Vishnu Chemicals Ltd."
  },
  {
    "symbol": "VPRPL",
    "name": "Vishnu Prakash R Punglia Ltd."
  },
  {
    "symbol": "VLSFINANCE",
    "name": "VLS Finance Ltd."
  },
  {
    "symbol": "PORRITSPEN",
    "name": "Voith Paper Fabrics India Ltd."
  },
  {
    "symbol": "VTMLTD",
    "name": "VTM Ltd."
  },
  {
    "symbol": "WALCHANNAG",
    "name": "Walchandnagar Industries Ltd."
  },
  {
    "symbol": "WANBURY",
    "name": "Wanbury Ltd."
  },
  {
    "symbol": "WEALTH",
    "name": "Wealth First Portfolio Managers Ltd."
  },
  {
    "symbol": "REMIMETAL",
    "name": "Welspun Specialty Solutions Ltd."
  },
  {
    "symbol": "WENDT",
    "name": "Wendt (India) Ltd."
  },
  {
    "symbol": "WSTCSTPAPR",
    "name": "West Coast Paper Mills Ltd."
  },
  {
    "symbol": "WCIL",
    "name": "Western Carriers (India) Ltd."
  },
  {
    "symbol": "WHEELS",
    "name": "Wheels India Ltd."
  },
  {
    "symbol": "WINDLAS",
    "name": "Windlas Biotech Ltd."
  },
  {
    "symbol": "WINDMACHIN",
    "name": "Windsor Machines Ltd."
  },
  {
    "symbol": "WEL",
    "name": "Wonder Electricals Ltd."
  },
  {
    "symbol": "538451",
    "name": "Worth Investment & Trading Co Ltd."
  },
  {
    "symbol": "XCHANGING",
    "name": "Xchanging Solutions Ltd."
  },
  {
    "symbol": "XPROINDIA",
    "name": "Xpro India Ltd."
  },
  {
    "symbol": "544310",
    "name": "Yash Highvoltage Ltd."
  },
  {
    "symbol": "YASHO",
    "name": "Yasho Industries Ltd."
  },
  {
    "symbol": "YATRA",
    "name": "Yatra Online Ltd"
  },
  {
    "symbol": "511702",
    "name": "Yogi Ltd."
  },
  {
    "symbol": "YUKEN",
    "name": "Yuken India Ltd."
  },
  {
    "symbol": "ZTECH",
    "name": "Z-Tech (India) Ltd."
  },
  {
    "symbol": "ZEEMEDIA",
    "name": "Zee Media Corporation Ltd."
  },
  {
    "symbol": "ZFSTEERING",
    "name": "ZF Steering Gear (India) Ltd."
  },
  {
    "symbol": "ZODIAC",
    "name": "Zodiac Energy Ltd."
  },
  {
    "symbol": "ZOTA",
    "name": "Zota Health Care Ltd."
  },
  {
    "symbol": "ZUARI",
    "name": "Zuari Agro Chemicals Ltd."
  },
  {
    "symbol": "ZUARIIND",
    "name": "Zuari Industries Ltd."
  }
];


export default stockList;