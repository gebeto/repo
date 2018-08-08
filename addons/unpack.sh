rm -rf pkgs
mkdir -p pkgs
debs=`ls debs/*.deb | xargs -n 1 basename`
for entry in $debs
	do echo "$entry";
	`dpkg-deb -R debs/$entry pkgs/${entry%.deb}`;
done