CREATE TABLE tx_bootstrap_domain_model_contentelements (
  uid int(11) unsigned DEFAULT 0 NOT NULL auto_increment,
  pid int(11) DEFAULT 0 NOT NULL,

  list_type varchar(255) NOT NULL,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  active tinyint(4) unsigned DEFAULT 0 NOT NULL,
  content_elements varchar(255) NOT NULL,

  tstamp int(11) unsigned DEFAULT 0 NOT NULL,
  crdate int(11) unsigned DEFAULT 0 NOT NULL,
  deleted tinyint(4) unsigned DEFAULT 0 NOT NULL,
  hidden tinyint(4) unsigned DEFAULT 0 NOT NULL,
  sorting int(11) DEFAULT '0' NOT NULL,
  starttime int(11) unsigned DEFAULT 0 NOT NULL,
  endtime int(11) unsigned DEFAULT 0 NOT NULL,

  access_group int(11) DEFAULT 0 NOT NULL,

  PRIMARY KEY (uid),
  KEY parent (pid)
);

CREATE TABLE tt_content (
  content_elements varchar(255) NOT NULL,
  bootstrap_content_elements int(11) DEFAULT '0' NOT NULL,
);