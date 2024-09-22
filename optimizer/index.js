

const gltfPipeline = require("gltf-pipeline");
const fsExtra = require("fs-extra");
const path = require("path");
const fs = require("fs");


class GLTFOptimizer {
    
    static optimize_model(name_glb) {

        const glbToGltf = gltfPipeline.glbToGltf;
        const glb = fsExtra.readFileSync(`./glb/${name_glb}.glb`);
    
        glbToGltf(glb).then(function (results) {
        fsExtra.writeJsonSync(`./gltf/${name_glb}.gltf`, results.gltf);
        }).finally(() => {
            const processGltf = gltfPipeline.processGltf;
            const gltf = fsExtra.readJsonSync(`./gltf/${name_glb}.gltf`);
            const options = {
            dracoOptions: {
                compressionLevel: 10,
            },
            };
            processGltf(gltf, options).then(function (results) {
            fsExtra.writeJsonSync(`./optimized/${name_glb}.gltf`, results.gltf);
            });
        });
    }

}

function main() {

    folder_path_glb = path.join(__dirname, "glb");


    fs.readdir(folder_path_glb, (err, files) => {
        
        files.forEach(file => {
            GLTFOptimizer.optimize_model(file.slice(0, -4));
        })

    })

}

main()