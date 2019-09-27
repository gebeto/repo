# ./unpack.sh
./scripts/pack.sh
dpkg-scanpackages -m . /dev/null > Packages
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz

sed "s/{{DATE}}/$(date '+%d-%m-%y %T')/g" <README_TEMPLATE.MD >README.MD

./scripts/format_readme.py
