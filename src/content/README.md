## GPS affiliates
The JSON is derived from the following query. Log into the GPS MySQL database:
```
mysql -ugps_ro -p -hweb-wwwdb-pneumolive-01 -P3432 gps_live
```

Run:
```
SELECT CONCAT(
    '[', 
    GROUP_CONCAT(
        DISTINCT(JSON_OBJECT(
            'institution', U.gpu_institution,
            'country', U.gpu_country,
            'latitude', C.gco_latitude,
            'longitude', C.gco_longitude
        ))
    ),
    ']'
)
FROM gps_users AS U
    JOIN gps_coordinates AS C
    ON U.gpu_country = C.gco_location;
```

## Juno affiliates
The JSON is derived from a CSV file produced by Christine Boinett, named `juno_partners_250220.csv`.
