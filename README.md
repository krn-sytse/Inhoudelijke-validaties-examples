# Inhoudelijke validaties examples

This repository serves as a collection of example implementations of [NLCS++ inhoudelijke validatie](https://github.com/mijnaansluiting/Inhoudelijke-validaties). The following implementations have been provided:

- [Node.js](node) (using saxonjs-he)
- [Java](java) (using saxon-he CLI)

## NLCS++ example

[nlcs-example.xml](./nlcs-example.xml) can be used as a sample file across all validation implementation, which should return in a valid passing report. It includes the following:

- Project area A
- Cables B and C
- Service D
- Joint E
- Station F
- Protection pipe G covering a section of cable B

![nlcs-example.svg](./nlcs-example.svg)

### NOTE

Due to [a known bug](https://github.com/mijnaansluiting/Inhoudelijke-validaties/issues/7) in the validation software, the connection between cable C and station F is not properly detected, resulting in the following incorrect validation failure:

```xml
<svrl:failed-assert id="last_point_connected" test="if(nlcs:Bedrijfstoestand ne 'VERLATEN' and keronic:point-3d-interacts-with-area-2d($last-point, $project_area_pos_list)) then $last-connected else true()" location="/Q{NS_NLCSnetbeheer}NLCSnetbeheer[1]/Q{NS_NLCSnetbeheer}MSkabel[2]">
    <svrl:property-reference property="scope">
        <svrl:text>Bestaande Situatie alle bedrijfstoestanden</svrl:text>
    </svrl:property-reference>
    <svrl:property-reference property="rule-number">
        <svrl:text>21</svrl:text>
    </svrl:property-reference>
    <svrl:property-reference property="severity">
        <svrl:text>Informerend</svrl:text>
    </svrl:property-reference>
    <svrl:property-reference property="object-type">
        <svrl:text>MSkabel</svrl:text>
    </svrl:property-reference>
    <svrl:property-reference property="object-id">
        <svrl:text>C</svrl:text>
    </svrl:property-reference>
    <svrl:text>
        De kabel is niet verbonden met een mof, overdrachtspunt of station.
    </svrl:text>
</svrl:failed-assert>
```