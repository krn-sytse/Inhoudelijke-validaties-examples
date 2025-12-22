SAXON_HE_MAJOR=12
SAXON_HE_MINOR=9

curl -sSLo SaxonHE.zip https://github.com/Saxonica/Saxon-HE/releases/download/SaxonHE${SAXON_HE_MAJOR}-${SAXON_HE_MINOR}/SaxonHE${SAXON_HE_MAJOR}-${SAXON_HE_MINOR}J.zip
unzip -qop SaxonHE.zip saxon-he-${SAXON_HE_MAJOR}.${SAXON_HE_MINOR}.jar > saxon-he.jar
unzip -qo SaxonHE.zip "lib/*"
rm SaxonHE.zip

sh ../scripts/install-dist.sh