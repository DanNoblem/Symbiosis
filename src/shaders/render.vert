uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform sampler2D uTexPositions;
uniform sampler2D uTexVelocities;

uniform float uColorBoost;

attribute vec3 position;
attribute vec2 instanceUv;

varying vec4 vColor;

void main()
{
    vec4 modelPos = vec4(position, 1.0);
    vec4 offsetPos = texture2D(uTexPositions, instanceUv);
    modelPos.xyz += offsetPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * modelPos;

    vColor = vec4(255.0,255.0,255.0, 1.0);
}
