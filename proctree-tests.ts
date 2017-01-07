import * as Tree from 'proctree'

const tree = new Tree({
	seed: Math.round(Math.random() * 10000),
	segments: 10,
	levels: 5,
	vMultiplier: 0.66,
	twigScale: 0.47,
	initalBranchLength: 0.5,
	lengthFalloffFactor: 0.85,
	lengthFalloffPower: 0.75,
	clumpMax: 0.449,
	clumpMin: 0.404,
	branchFactor: 3,
	dropAmount: 0.05,
	growAmount: -0.005,
	sweepAmount: 0.01,
	maxRadius: 0.27,
	climbRate: 0.625,
	trunkKink: 0.108,
	treeSteps: 4,
	taperRate: 0.925,
	radiusFalloffRate: 0.66,
	twistRate: 2.7,
	trunkLength: 1.75
})

const positions = new Float32Array(Tree.flattenArray(tree.verts))
