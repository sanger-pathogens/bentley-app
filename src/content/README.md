# Content
Some of the data content of the site is stored in the directory as json.
Other data content is stored in public/markdown directory as markdown.

## GPS affiliates
The JSON is derived from [partners.txt](https://github.com/jyothishnt/GPS-Project-Website/blob/master/partners.txt):

```
cat src/content/gps-partners.tsv | csv2json -t | jq '[unique_by(.Affiliation) | .[] | {country: .Country, affiliat
ion: .Affiliation, longitude: .Longitude, latitude: .latitude}]' > src/content/gps-affiliates.json
```

## Juno affiliates
The JSON is derived from a CSV file produced by Christine Boinett, named `juno_partners_250220.csv`.
