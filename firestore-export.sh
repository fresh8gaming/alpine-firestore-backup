#!/bin/sh
gcloud config set project $GCLOUD_PROJECT_ID
node get-collection-list.js
gcloud firestore export --async gs://"$GCLOUD_BUCKET_NAME" --collection-ids=$(cat collection-list.txt)