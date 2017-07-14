/* jshint esversion: 6, node: true */

class DeploymentListener {

    constructor(s3Client) {
        this.s3Client = s3Client;
    }


}

module.exports = DeploymentListener;