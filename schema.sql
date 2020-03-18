DROP TABLE IF EXISTS FDSManager CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
DROP TABLE IF EXISTS Restaurants CASCADE;
DROP TABLE IF EXISTS Staffs CASCADE;
DROP TABLE IF EXISTS FoodItem CASCADE;
DROP TABLE IF EXISTS DeliveryRiders CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS OrderedItem CASCADE;
DROP TABLE IF EXISTS Payment CASCADE;
DROP TABLE IF EXISTS SpecialPromotion CASCADE;
DROP TABLE IF EXISTS DeliveryPromotion CASCADE;
DROP TABLE IF EXISTS PricePromotion CASCADE;
DROP TABLE IF EXISTS Locations CASCADE;
DROP TABLE IF EXISTS Assignment CASCADE;
DROP TABLE IF EXISTS Feedback CASCADE;
DROP SEQUENCE IF EXISTS ManagerSeq, CidSeq, SidSeq, DidSeq, IOidSeq, LidSeq, OidSeq, FidSeq, PromoSeq, feedbackSeq;

--accessRight 1:FDS Manageer, 2: Restaurant Staff, 3: Delivery Riders, 4: Customers

CREATE SEQUENCE ManagerSeq;
CREATE TABLE FDSManager (
	manager_id 			INTEGER DEFAULT nextval('ManagerSeq'),
	accessRight			INTEGER NOT NULL,
	password			VARCHAR(100) NOT NULL,
	PRIMARY KEY (manager_id)
);
ALTER SEQUENCE ManagerSeq OWNED BY FDSManager.manager_id;

CREATE SEQUENCE CidSeq;
CREATE TABLE Customers (
	Cid					INTEGER DEFAULT nextval('CidSeq'),
	name				VARCHAR(50) NOT NULL,
	numOrders			INTEGER,
	rewardPoints		INTEGER,
	currentAddress		VARCHAR(100) NOT NULL,
	lastOrderTime		TIMESTAMP,
	createdDate			DATE NOT NULL,
	accessRight			INTEGER NOT NULL,
	password			VARCHAR(100) NOT NULL,
	PRIMARY KEY (Cid)
);
ALTER SEQUENCE CidSeq OWNED BY Customers.Cid;

CREATE TABLE CreditCardList (
	Cid					INTEGER,
	creditCardNumber	bigint,
	PRIMARY KEY (creditCardNumber),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid) ON DELETE CASCADE
);

CREATE SEQUENCE RidSeq;
CREATE TABLE Restaurants (
	Rid					INTEGER DEFAULT nextval('RidSeq'),
	name				VARCHAR(50) NOT NULL,
	minAmount			DECIMAL NOT NULL,
	address				VARCHAR(100) NOT NULL,
	PRIMARY KEY (Rid)
);
ALTER SEQUENCE RidSeq OWNED BY Restaurants.Rid;

CREATE SEQUENCE SidSeq;
CREATE TABLE Staffs (
	Sid					INTEGER DEFAULT nextval('SidSeq'),
	Rid					INTEGER NOT NULL,
	name				VARCHAR(50) NOT NULL,
	hireDate			DATE NOT NULL,
	terminationDate 	DATE,
	accessRight			INTEGER NOT NULL,
	password			VARCHAR(100) NOT NULL,
	PRIMARY KEY (Sid),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid) ON DELETE CASCADE
);
ALTER SEQUENCE SidSeq OWNED BY Staffs.Sid;

CREATE SEQUENCE FidSeq;
CREATE TABLE FoodItem (
	Fid					INTEGER DEFAULT nextval('FidSeq'),
	Rid					INTEGER NOT NULL,
	name				VARCHAR(50) NOT NULL,
	originalPrice		DECIMAL NOT NULL,
	categories			VARCHAR(10) NOT NULL,
	dailyLimit			INTEGER NOT NULL,
	availabilityStatus	INTEGER, -- to reset to dailyLimit daily
	PRIMARY KEY (Fid),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid) ON DELETE CASCADE
);
ALTER SEQUENCE FidSeq OWNED BY FoodItem.Fid;

CREATE SEQUENCE DidSeq;
CREATE TABLE DeliveryRiders (
	Did					INTEGER DEFAULT nextval('DidSeq'),
	name				VARCHAR(50) NOT NULL,
	startDate			DATE NOT NULL,
	terminationDate		DATE,
	accessRight			INTEGER NOT NULL,
	password			VARCHAR(100) NOT NULL,
	PRIMARY KEY (Did)
);
ALTER SEQUENCE DidSeq OWNED BY DeliveryRiders.Did;

CREATE TABLE PartTime (
    Did 				INTEGER,
    weekSalary			INTEGER,
    weekScheduleId		INTEGER,
    PRIMARY KEY (Did),
    FOREIGN KEY (Did) REFERENCES DeliveryRiders
);

CREATE TABLE FullTime (
	Did 				INTEGER,
	monthSalary			INTEGER,
	monthScheduleId		INTEGER,
	PRIMARY KEY (Did),
    FOREIGN KEY (Did) REFERENCES DeliveryRiders
);

CREATE TABLE PartTimeWeekSchedule (
	Wid 				INTEGER,
	day 				TEXT,
	startTime			INTEGER,
	endTime				INTEGER
	PRIMARY KEY (Wid)
);

CREATE TABLE MonthSchedule (
	Mid 				INTEGER,
	Wid 				INTEGER,
	PRIMARY KEY (Mid),
	FOREIGN KEY (Wid) REFERENCES FullTimeWeekSchedule
);

CREATE TABLE FullTimeWeekSchedule (
	Wid 				INTEGER,
	Days				INTEGER,
	Shift				INTEGER,
	PRIMARY KEY (Wid), 
	FOREIGN KEY (Days) REFERENCES Workdays
	FOREIGN KEY (Shift) REFERENCES Shifts
);

CREATE TABLE Workdays (
	-- Static table
	Days 				INTEGER,
	description			TEXT,
	PRIMARY KEY (Days)
);

CREATE TABLE Shifts (
	-- Static table
	Shift 				INTEGER,
	description 		TEXT,
	PRIMARY KEY (Shift)
);

CREATE SEQUENCE OidSeq;
CREATE TABLE Orders (
	Oid					INTEGER DEFAULT nextval('OidSeq'),
	Did					INTEGER NOT NULL,
	Cid					INTEGER NOT NULL,
	cost				DECIMAL NOT NULL,
	location			VARCHAR(100) NOT NULL,
	orderTime			TIMESTAMP NOT NULL,
	deliveryCost		DECIMAL NOT NULL,
	PRIMARY KEY (Oid),
	FOREIGN KEY (Did) REFERENCES DeliveryRiders (Did),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid) ON DELETE CASCADE
);
ALTER SEQUENCE OidSeq OWNED BY Orders.Oid;

CREATE SEQUENCE IOidSeq;
CREATE TABLE OrderedItem (
	IOid				INTEGER DEFAULT nextval('IOidSeq'),
	Oid					INTEGER,
	Fid					INTEGER,
	originalPrice		DECIMAL NOT NULL,
	quantity			INTEGER NOT NULL,
	PRIMARY KEY (IOid),
	FOREIGN KEY (Oid) REFERENCES Orders (Oid) ON DELETE CASCADE,
	FOREIGN KEY (Fid, price) REFERENCES FoodItem (Fid, originalPrice)
);
ALTER SEQUENCE IOidSeq OWNED BY OrderedItem.IOid;

CREATE TABLE Payment (
	Oid					INTEGER PRIMARY KEY REFERENCES Orders ON DELETE CASCADE,
	Cid					INTEGER NOT NULL,
	cash				BOOLEAN NOT NULL,
	FOREIGN KEY (Cid) REFERENCES Customers (Cid)
);

CREATE SEQUENCE SpecialPromoSeq;
CREATE TABLE SpecialPromotion (
	promo_id			INTEGER DEFAULT nextval('SpecialPromoSeq'),
	Cid					INTEGER,
	startTime			TIMESTAMP NOT NULL,
	endTime				TIMESTAMP NOT NULL,
	discount			INTEGER NOT NULL,
	PRIMARY KEY (promo_id),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid),
);
ALTER SEQUENCE SpecialPromoSeq OWNED BY Promotion.promo_id;

CREATE SEQUENCE DeliveryPromoSeq;
CREATE TABLE DeliveryPromotion (
	promo_id			INTEGER DEFAULT nextval('DeliveryPromoSeq'),
	startTime			TIMESTAMP NOT NULL,
	endTime				TIMESTAMP NOT NULL,
	discount			INTEGER NOT NULL,
	numOrders			INTEGER,
	PRIMARY KEY (promo_id),
);
ALTER SEQUENCE DeliveryPromoSeq OWNED BY Promotion.promo_id;

CREATE SEQUENCE PricePromoSeq;
CREATE TABLE PricePromotion (
	promo_id			INTEGER DEFAULT nextval('PricePromoSeq'),
	Rid					INTEGER NOT NULL,
	startTime			TIMESTAMP NOT NULL,
	endTime				TIMESTAMP NOT NULL,
	discount			INTEGER NOT NULL,
	PRIMARY KEY (promo_id),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid)
);
ALTER SEQUENCE PricePromoSeq OWNED BY Promotion.promo_id;

CREATE SEQUENCE LidSeq;
CREATE TABLE Locations (
	Lid					INTEGER DEFAULT nextval('LidSeq'),
	Cid					INTEGER,
	LatestDate			TIMESTAMP NOT NULL,
	address				VARCHAR(100),
	PRIMARY KEY (Lid),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid) ON DELETE CASCADE
);
ALTER SEQUENCE LidSeq OWNED BY Locations.Lid;

CREATE TABLE Assignment (
	Oid					INTEGER NOT NULL,
	Did					INTEGER NOT NULL,
	TimeOrderPlaced			TIMESTAMP,
	DepartTimeToRestaurant	TIMESTAMP,
	ArrivalTimeToRestaurant	TIMESTAMP,
	DepartTimeToCustomer	TIMESTAMP,
	ArrivalTimeToCustomer	TIMESTAMP,
	FOREIGN KEY (Oid) REFERENCES Orders (Oid),
	FOREIGN KEY (Did) REFERENCES DeliveryRiders (Did)
);

CREATE SEQUENCE feedbackSeq;
CREATE TABLE Feedback (
	feedback_id			INTEGER DEFAULT nextval('feedbackSeq'),
	Rid					INTEGER,
	Did					INTEGER,
	review				VARCHAR(500),
	rating				INTEGER NOT NULL,
	PRIMARY KEY (feedback_id),
	FOREIGN KEY (Rid) REFERENCES Restaurants (Rid), -- reviews for restaurants
	FOREIGN KEY (Did) REFERENCES DeliveryRiders (Did) -- reviews for delivery riders
);
ALTER SEQUENCE feedbackSeq OWNED BY Feedback.feedback_id;


\COPY FDSManager FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\FDSManager.csv' DELIMITER ',' CSV HEADER;
\COPY Customers FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Customers.csv' DELIMITER ',' CSV HEADER;
\COPY Restaurants FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Restaurants.csv' DELIMITER ',' CSV HEADER;
\COPY Staffs FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Staffs.csv' DELIMITER ',' CSV HEADER;
\COPY FoodItem FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\FoodItem.csv' DELIMITER ',' CSV HEADER;
\COPY DeliveryRiders FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\DeliveryRiders.csv' DELIMITER ',' CSV HEADER;
\COPY Orders FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Orders.csv' DELIMITER ',' CSV HEADER;
\COPY OrderedItem FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\OrderedItem.csv' DELIMITER ',' CSV HEADER;
\COPY Payment FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Payment.csv' DELIMITER ',' CSV HEADER;
\COPY Promotion FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Promotion.csv' DELIMITER ',' CSV HEADER;
\COPY Locations FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Locations.csv' DELIMITER ',' CSV HEADER;
\COPY Assignment FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Assignment.csv' DELIMITER ',' CSV HEADER;
\COPY Feedback FROM 'C:\Users\User\Desktop\Y4S2\CS2102\Project\data\Feedback.csv' DELIMITER ',' CSV HEADER;