DROP TABLE IF EXISTS FDSManager CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
DROP TABLE IF EXISTS Restaurants CASCADE;
DROP TABLE IF EXISTS Staffs CASCADE;
DROP TABLE IF EXISTS FoodItem CASCADE;
DROP TABLE IF EXISTS DeliveryRiders CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS OrderedItem CASCADE;
DROP TABLE IF EXISTS Payment CASCADE;
DROP TABLE IF EXISTS Promotion CASCADE;
DROP TABLE IF EXISTS Locations CASCADE;
DROP TABLE IF EXISTS Assignment CASCADE;
DROP TABLE IF EXISTS Feedback CASCADE;
DROP SEQUENCE IF EXISTS ManagerSeq, CidSeq, SidSeq, DidSeq, IOidSeq, LidSeq, OidSeq, FidSeq, PromoSeq, feedbackSeq;


--accessRight 1:FDS Manageer, 2: Restaurant Staff, 3: Delivery Riders, 4: Customers

CREATE SEQUENCE ManagerSeq;
CREATE TABLE FDSManager (
	manager_id 			INTEGER DEFAULT nextval('ManagerSeq'),
	accessRight			INTEGER NOT NULL,
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
	creditCardNumber	bigint,
	accessRight			INTEGER NOT NULL,
	PRIMARY KEY (Cid)
);
ALTER SEQUENCE CidSeq OWNED BY Customers.Cid;

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
	baseSalary			DECIMAL NOT NULL, -- delivery fee to be added based on the number of deliveries made in that month
	employmentType		INTEGER NOT NULL, -- 1: fullTime, 2: partTime
	accessRight			INTEGER NOT NULL,
	-- shifts?
	PRIMARY KEY (Did)
);
ALTER SEQUENCE DidSeq OWNED BY DeliveryRiders.Did;

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
	price				DECIMAL NOT NULL,
	quantity			INTEGER NOT NULL,
	PRIMARY KEY (IOid),
	FOREIGN KEY (Oid) REFERENCES Orders (Oid) ON DELETE CASCADE
);
ALTER SEQUENCE IOidSeq OWNED BY OrderedItem.IOid;

CREATE TABLE Payment (
	Oid					INTEGER PRIMARY KEY REFERENCES Orders ON DELETE CASCADE,
	Cid					INTEGER NOT NULL,
	cash				BOOLEAN NOT NULL,
	FOREIGN KEY (Cid) REFERENCES Customers (Cid)
);

CREATE SEQUENCE PromoSeq;
CREATE TABLE Promotion (
	promo_id			INTEGER DEFAULT nextval('PromoSeq'),
	Cid					INTEGER,
	Fid					INTEGER,
	promotionType		INTEGER, -- 1: SpecialCoupon, 2: FreeDelivery, 3: PromotionalPrice
	promotionalCode		VARCHAR(20) NOT NULL,
	startTime			TIMESTAMP NOT NULL,
	endTime				TIMESTAMP NOT NULL,
	PRIMARY KEY (promo_id),
	FOREIGN KEY (Cid) REFERENCES Customers (Cid), -- for SpecialCoupon
	FOREIGN KEY (Fid) REFERENCES FoodItem (Fid) -- for PromotionalPrice
);
ALTER SEQUENCE PromoSeq OWNED BY Promotion.promo_id;

CREATE SEQUENCE LidSeq;
CREATE TABLE Locations (
	Lid					INTEGER DEFAULT nextval('LidSeq'),
	Cid					INTEGER,
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

--change destimation accoringly
\COPY FDSManager FROM '..\data\FDSManager.csv' DELIMITER ',' CSV HEADER;
\COPY Customers FROM '..\data\Customers.csv' DELIMITER ',' CSV HEADER;
\COPY Restaurants FROM '..\data\Restaurants.csv' DELIMITER ',' CSV HEADER;
\COPY Staffs FROM '..\data\Staffs.csv' DELIMITER ',' CSV HEADER;
\COPY FoodItem FROM '..\data\FoodItem.csv' DELIMITER ',' CSV HEADER;
\COPY DeliveryRiders FROM '..\data\DeliveryRiders.csv' DELIMITER ',' CSV HEADER;
\COPY Orders FROM '..\data\Orders.csv' DELIMITER ',' CSV HEADER;
\COPY OrderedItem FROM '..\data\OrderedItem.csv' DELIMITER ',' CSV HEADER;
\COPY Payment FROM '..\data\Payment.csv' DELIMITER ',' CSV HEADER;
\COPY Promotion FROM '..\data\Promotion.csv' DELIMITER ',' CSV HEADER;
\COPY Locations FROM '..\data\Locations.csv' DELIMITER ',' CSV HEADER;
\COPY Assignment FROM '..\data\Assignment.csv' DELIMITER ',' CSV HEADER;
\COPY Feedback FROM '..\data\Feedback.csv' DELIMITER ',' CSV HEADER;