# ./unpack.sh
# read -p "Change packages if need and press enter: "
./pack.sh
dpkg-scanpackages -m . /dev/null > Packages
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz

sed "s/{{DATE}}/$(date '+%d-%m-%y %T')/g" <README_TEMPLATE.MD >README.MD