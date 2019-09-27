mkdir -p debs
pkgs=`ls pkgs | xargs -n 1 basename`;
for entry in $pkgs
do
	dpkg-deb --build pkgs/$entry debs/$entry.deb;
done
