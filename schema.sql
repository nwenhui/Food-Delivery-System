DROP TABLE IF EXISTS FDSManager CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
DROP TABLE IF EXISTS Staffs CASCADE;
DROP TABLE IF EXISTS Restaurants CASCADE;
DROP TABLE IF EXISTS FoodItem CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS OrderedItem CASCADE;
DROP TABLE IF EXISTS Payment CASCADE;
DROP TABLE IF EXISTS DeliveryRiders CASCADE;
DROP TABLE IF EXISTS Promotion CASCADE;
DROP TABLE IF EXISTS Locations CASCADE;
DROP TABLE IF EXISTS Assignment CASCADE;

--accessRight 1:FDS Manageer, 2: Restaurant Staff, 3: Delivery Riders, 4: Customers

CREATE SEQUENCE ManagerSeq;
CREATE TABLE FDSManager (
	manager_id 			INTEGER DEFAULT nextval('ManagerSeq'),
	accessRight			INTEGER NOT NULL,
	PRIMARY KEY (manager_id),
);
ALTER SEQUENCE ManagerSeq OWNED BY FDSManager.manager_id;

CREATE SEQUENCE CidSeq;
CREATE TABLE Customers (
	Cid					INTEGER DEFAULT nextval('CidSeq'),
	name				VARCHAR(50) NOT NULL,
	numOrders			INTEGER,
	rewardPoints		INTEGER,
	currentAddress		VARCHAR(100) NOT NULL,
	LastOrderDate		DATETIME,
	createdDate			DATE NOT NULL,
	creditCardNumber	bigint,
	accessRight			INTEGER NOT NULL,
	PRIMARY KEY (Cid),
	FOREIGN KEY (promo_id) REFERENCES Promotion (promo_id)
);
ALTER SEQUENCE CidSeq OWNED BY Customers.Cid;

CREATE SEQUENCE SidSeq;
CREATE TABLE Staffs (
	Sid					INTEGER DEFAULT nextval('SidSeq'),
	name				VARCHAR(50) NOT NULL,
	hireDate			DATE NOT NULL,
	terminationDate 	DATE,
	accessRight			INTEGER NOT NULL,
	PRIMARY KEY (Sid),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid)
);
ALTER SEQUENCE SidSeq OWNED BY Staffs.Sid;

CREATE SEQUENCE RidSeq;
CREATE TABLE Restaurants (
	Rid					INTEGER DEFAULT nextval('RidSeq'),
	name				VARCHAR(50) NOT NULL,
	minAmount			INTEGER NOT NULL,
	address				VARCHAR(100) NOT NULL,
	PRIMARY KEY (Rid)
);
ALTER SEQUENCE RidSeq OWNED BY Restaurants.Rid;

CREATE SEQUENCE FidSeq;
CREATE TABLE FoodItem (
	Fid					INTEGER DEFAULT nextval('FidSeq'),
	name				VARCHAR(50) NOT NULL,
	originalPrice		REAL NOT NULL,
	categories			VARCHAR(10) NOT NULL,
	dailyLimit			INTEGER NOT NULL,
	availabilityStatus	INTEGER, -- to reset to dailyLimit daily
	PRIMARY KEY (Fid),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid) ON DELETE CASCADE
);
ALTER SEQUENCE FidSeq OWNED BY FoodItem.Fid;

CREATE SEQUENCE OidSeq;
CREATE TABLE Orders (
	Oid					INTEGER DEFAULT nextval('OidSeq'),
	cost				REAL NOT NULL,
	location			VARCHAR(100) NOT NULL,
	orderDate			DATETIME NOT NULL,
	deliveryCost		REAL NOT NULL,
	PRIMARY KEY (Oid),
	FOREIGN KEY (Did) REFERENCES DeliveryRiders (Did),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid) ON DELETE CASCADE
);
ALTER SEQUENCE OidSeq OWNED BY Orders.Oid;

CREATE SEQUENCE IOidSeq;
CREATE TABLE OrderedItem (
	IOid				INTEGER DEFAULT nextval('IOidSeq'),
	ItemName			VARCHAR(50) NOT NULL,
	Price				REAL NOT NULL,
	quantity			INTEGER NOT NULL,
	PRIMARY KEY (IOid),
	FOREIGN KEY (Oid) REFERENCES Orders (Oid) ON DELETE CASCADE,
);
ALTER SEQUENCE IOidSeq OWNED BY OrderedItem.IOid;

CREATE TABLE Payment (
	Oid					INTEGER PRIMARY KEY REFERENCES Orders ON DELETE CASCADE,
	cash				BOOLEAN NOT NULL,
	FOREIGN KEY (Cid) REFERENCES Customers (Cid)
);

CREATE SEQUENCE DidSeq;
CREATE TABLE DeliveryRiders (
	Did					INTEGER DEFAULT nextval('DidSeq'),
	name				VARCHAR(50) NOT NULL,
	startDate			DATE NOT NULL,
	endDate				DATE NOT NULL,
	baseSalary			REAL NOT NULL, -- delivery fee to be added based on the number of deliveries made in that month
	employmentType		INTEGER NOT NULL, -- 1: fullTime, 2: partTime
	accessRight			INTEGER NOT NULL,
	-- shifts?
	PRIMARY KEY (Did),
);
ALTER SEQUENCE DidSeq OWNED BY DeliveryRiders.Did;

CREATE SEQUENCE PromoSeq;
CREATE TABLE Promotion (
	promo_id			INTEGER DEFAULT nextval('PromoSeq'),
	promotionType		INTEGER -- 1: SpecialCoupon, 2: FreeDelivery, 3: PromotionalPrice
	promotionalCode		VARCHAR(10) NOT NULL,
	startDate				DATETIME NOT NULL,
	endDate					DATETIME NOT NULL
	PRIMARY KEY (promo_id),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid), -- for SpecialCoupon
	FOREIGN KEY (Fid) REFERENCES FoodItem (Fid) -- for PromotionalPrice
);
ALTER SEQUENCE PromoSeq OWNED BY Promotion.promo_id;

CREATE SEQUENCE LidSeq;
CREATE TABLE Locations (
	Lid					INTEGER DEFAULT nextval('LidSeq'),
	address				VARCHAR(100),
	PRIMARY KEY (Lid),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid) ON DELETE CASCADE
);
ALTER SEQUENCE LidSeq OWNED BY Locations.Lid;

CREATE TABLE Assignment (
	TimeOrderPlaced			DATETIME,
	DepartTimeToRestaurant	DATETIME,
	ArrivalTimeToRestaurant	DATETIME,
	DepartTimeToCustomer	DATETIME,
	ArrivalTimeToCustomer	DATETIME,
	FOREIGN KEY (Oid) REFERENCES Orders (Oid),
	FOREIGN KEY (Did) REFERENCES DeliveryRiders (Did)
);







