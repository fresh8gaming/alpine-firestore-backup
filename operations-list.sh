#!/bin/sh
gcloud config set project $GCLOUD_PROJECT_ID
gcloud firestore operations list
