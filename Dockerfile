FROM google/cloud-sdk:alpine

ENV PORT "8080"

COPY --from=msoap/shell2http /app/shell2http /shell2http
COPY firestore-export.sh operations-list.sh /

ENTRYPOINT ["/shell2http","-export-all-vars"]
CMD ["/backup","/firestore-export.sh","/list","/operations-list.sh"]
