# Bentley Group

## About us

We work with whole genome sequence data to understand how bacterial pathogens colonise humans and, in some cases, cause disease.

By studying the bacteria with high resolution genetic data we aim to understand how bacterial pathogens evade clinical intervention strategies (eg. antibiotics and vaccines), how they transmit from person to person and how they spread from country to country. Ultimately we hope to generate new data that can be used to improve strategies for infection control and disease prevention.


## Research themes

Infectious disease is one of the leading causes of mortality in children under five*. The advent of large-scale genomic sequencing technology, open access data and increasing collaborations worldwide has enabled research scientists to tackle the problem of infectious disease from a global standpoint. Through various projects, we aim to understand the evolution of bacteria associated with pneumonia, meningitis and neonatal sepsis in a global context, in particular are those whose major disease burden are in resource-poor settings.

*[World Health Organization](https://www.who.int/topics/infectious_diseases/en/)

## Our key species of interest

### *Streptococcus pneumoniae*
*Streptococcus pneumoniae* naturally colonises the nasopharynx of healthy individuals but can cause serious invasive diseases such as bacteremia and meningitis and is the leading cause of bacterial pneumonia. In 2011 we sequenced 20 000 pneumococcal strains from across the globe in the effort to understand how this bacterium was responding to the vaccine. The [Global Pneumococcal Sequencing (GPS)](https://www.pneumogen.net/) project produced the largest database of pneumococcal genomes and successfully demonstrated the importance of genomic surveillance by detecting key pneumococcal strains that evade vaccine and antibiotics on national and international level. In the GPS 2.0, we will extend the temporal coverage to characterise the post vaccine equilibrated population so as to inform future vaccine design, and span the geographical coverage to investigate the pneumococcal population in regions with high burden of pneumococcal diseases. Establishing a working system for sustainable genomic surveillance, providing bioinformatic training to our project partners, capacity building in priority countries and engaging policy makers are also our key activities in the GPS 2.0.

### *Neisseria meningitidis*
*Neisseria meningitidis*, the meningococcus, is a species of bacteria found exclusively in humans, which is a considerable cause of bacterial meningitis, as well as septicemia. These infections are difficult to treat and have a high case fatality rate, but are asymptomatic carriage infections in most cases.  The meningococcus has a substantial disease burden in the meningitis belt of sub-saharan Africa, where the incidence of infection and disease are much higher than elsewhere globally. We work on several whole-genome sequenced datasets of *N. meningitidis* including a large Burkina Faso carriage [collection](https://www.ncbi.nlm.nih.gov/pubmed/23914778), the MenAfriCar meningitis belt carriage surveillance project, and a global collection of carriage and disease isolates with considerable temporal spread.

### *Streptococcus agalactiae*
Group B *Streptococcus* (GBS or *Streptococcus agalactiae*) is an opportunistic pathogen and a major cause of neonatal invasive disease, with a particular impact on infant mortality in low and middle-income countries (LMICs), where disease prevention strategies are less often implemented or have low coverage. The [JUNO](gbsgen.net) project will conduct a global genomic survey of GBS isolates from across a broad geographical and temporal span with the central aim of informing vaccine development and other disease intervention strategies. The project will focus on three key areas of GBS biology: global genomic diversity, genetic associations with the disease and transmission.

## Our software

### FastBAPS
[View on GitHub](https://github.com/gtonkinhill/fastbaps)

Fastbaps is a fast solution to the genetic clustering problem. It rapidly identifies an approximate fit to a Dirichlet process mixture model (DPM) for clustering multilocus genotype data. Our efficient model-based clustering approach is able to cluster datasets 10–100 times larger including over 110,000 sequences of HIV-1 pol genes. [RheirBAPS](https://rdrr.io/github/gtonkinhill/rhierbaps/man/hierBAPS.html), is an R implementation of  fasBAPS, that automates the entire pipeline.


### Gubbins
[View documentation](http://sanger-pathogens.github.io/gubbins/)

Gubbins (Genealogies Unbiased By recomBinations In Nucleotide Sequences) identifies recombination regions in the bacterial genome using an algorithm that iteratively identifies loci containing elevated densities of base substitutions while concurrently constructing a phylogeny based on the putative point mutations outside of these regions.

### Pairsnp
[View on GitHub](https://github.com/gtonkinhill/pairsnp)

Pairsnp is used to quickly obtain pairwise SNP distance matrices from multiple sequence alignments. For larger alignments, pairsnp is an order of magnitude faster than approaches based on pairwise comparison of every site.

### Panaroo
[View on GitHub](https://github.com/gtonkinhill/panaroo) 

Panaroo is a graph based pangenome clustering tool that is able to account for many of the sources of error introduced during the annotation of prokaryotic genome assemblies. 

### PopPUNK
[View documentation](https://poppunk.readthedocs.io/en/latest/)

PopPUNK (Population Partitioning Using Nucleotide K-mers) uses scalable and expandable annotation- and alignment-free methods for population analysis and clustering.

### SEER and PYSEER
[View SEER on GitHub](https://github.com/johnlees/seer)

[View PYSEER documentation](https://pyseer.readthedocs.io/en/master/) 

SEER (sequence element enrichment analysis) is a statistical method that identifies sequence elements that are significantly enriched in a phenotype of interest. PYSEER is a further implementation of seer written in python with additional features. Both pyseer and its predecessor, seer, allow for genome-wide association studies (GWAS) to be performed in clonal organisms such as bacteria and viruses.

## Meet the team

### Professor Stephen D. Bentley - Team Leader
![Professor Stephen D. Bentley - Team Leader](people/Stephen_1_BW_2.jpg "Professor Stephen D. Bentley - Team Leader")

I’m interested in exploring how we can use genomics in efforts to reduce the burden of bacterial pathogens causing pneumonia, meningitis and neonatal sepsis in infants in low-income settings.

### Dr Chrispin Chaguza - Post Doctoral Fellow
![Dr Chrispin Chaguza - Post Doctoral Fellow](people/Chrispin_2_BW.jpg "Dr Chrispin Chaguza - Post Doctoral Fellow")

My research uses high-throughput sequencing approaches to understand the epidemiology, evolution and genetics of bacterial phenotypes primarily in clinically-significant pathogens.

### Dr Christine J. Boinett - Product Manager and Principal Bioinformatician
![Dr Christine J. Boinett - Product Manager and Principal Bioinformatician](people/Christine_1_BW.jpg "Dr Christine J. Boinett - Product Manager and Principal Bioinformatician")

I am involved in developing, managing and delivering bioinformatics training for our JUNO and GPS2 project partners.

### Dr. Dorota Jamrozy - Project Manager and Principal Bioinformatician
![Dr. Dorota Jamrozy - Project Manager and Principal Bioinformatician](people/Dorota_1_BW.jpg "Dr. Dorota Jamrozy - Project Manager and Principal Bioinformatician")

I coordinate the JUNO project and study genomics and evolution of Group B *Streptococcus*.

### Dr Felix Dube - Visiting Researcher
![Dr Felix Dube - Visiting Researcher](people/Felix_BW.jpg "Dr Felix Dube - Visiting Researcher")

My interest is in analysing microbial populations (with a focus on *Streptococcus pneumoniae*) to understand the epidemiology and spread of antimicrobial resistance.

### Gareth Peat - Principal Software Developer
![Gareth Peat - Principal Software Developer](people/Gareth_2_BW.jpg "Gareth Peat - Principal Software Developer")

I am involved in developing the software and infrastructure for the JUNO project.

### Gerry Tonkin-HIll - PhD Student
![Gerry Tonkin-HIll - PhD Student](people/Gerry_1_BW.jpg "Gerry Tonkin-HIll - PhD Student")

I study within-host evolution and transmission in *Streptococcus pneumoniae* as well as  developing statistical and bioinformatics methods for microbial genomics.

### Neil MacAlasdair - PhD student
![Neil MacAlasdair - PhD Student](people/Neil_1_BW.jpg "Neil MacAlasdair - PhD Student")

I study recombination and its effects on evolution in *Neisseria meningitidis* and how this affects various populations.

### Dr. Stephanie Wai-U Lo - Project Manager and Principal Bioinformatician
![Dr. Stephanie Wai-U Lo - Project Manager and Principal Bioinformatician](people/Stephanie_1_BW2.jpg "Dr. Stephanie Wai-U Lo - Project Manager and Principal Bioinformatician")

I oversee the Global Pneumococcal Sequencing Project by setting overall scientific strategy, communicating with collaborators, and delivering outputs through publications.

### Uzma Basit Khan - Senior Computational Biologist
![Uzma Basit Khan - Senior Computational Biologist](people/Uzma_2_BW.jpg "Uzma Basit Khan - Senior Computational Biologist")

I study antibiotic resistance mechanisms, recombination, mobile genetic elements and transmission in *Streptococcus agalactiae* to comprehend bacterial adaptation and evolution.

## Alumni

[Claire Chewapreecha](https://www.tropicalmedicine.ox.ac.uk/team/claire-chewapreecha)

[John Lees](https://www.imperial.ac.uk/people/j.lees)

[Jyothish Bhai](https://www.ebi.ac.uk/about/people/jyothish-bhai)

[Nicholas Croucher](https://www.imperial.ac.uk/people/n.croucher)

[Rebecca Gladstone](https://www.linkedin.com/in/rebecca-gladstone-31a52325/)

## Visitors

**2020**

Nida Javaid, visiting PhD student from Molecular Epidemiology and Microbiology Lab, Department of Biology, Lahore University of Management Sciences, Pakistan.

Chiara Crestani, visiting PhD student from the Institute of Biodiversity, Animal Health & Comparative Medicine, University of Glasgow, United Kingdom.

**2019**

Kay To, visiting PhD student from the Department of Medicine, Imperial College London, United Kingdom

Anna Kaarina Pöntinen, visiting Postdoctoral Fellow from the Oslo Centre for Biostatistics and Epidemiology, University of Oslo, Norway


## Selected Publications
[Pneumococcal lineages associated with serotype replacement and antibiotic resistance in childhood invasive pneumococcal disease in the post-PCV13 era: an international whole-genome sequencing study.](https://www.ncbi.nlm.nih.gov/pubmed/31196809)
Lo SW, Gladstone RA, van Tonder AJ, Lees JA, du Plessis M, *et al.* Lancet Infect Dis. 2019 Jul;19(7):759-769.
 
[Evolution and Global Transmission of a Multidrug-Resistant, Community-Associated Methicillin-Resistant Staphylococcus aureus Lineage from the Indian Subcontinent.](https://www.ncbi.nlm.nih.gov/pubmed/31772058)
Steinig EJ, Duchene S, Robinson DA, Monecke S, Yokoyama M, *et al.* mBio. 2019 Nov 26;10(6).
 
[International genomic definition of pneumococcal lineages, to contextualise disease, antibiotic resistance and vaccine impact.](https://www.ncbi.nlm.nih.gov/pubmed/31003929)
Gladstone RA, Lo SW, Lees JA, Croucher NJ, van Tonder AJ, *et al*. EBioMedicine. 2019 May;43:338-346.
 
[Joint sequencing of human and pathogen genomes reveals the genetics of pneumococcal meningitis.](https://www.ncbi.nlm.nih.gov/pubmed/31092817)
Lees JA, Ferwerda B, Kremer PHC, Wheeler NE, Serón MV *et al.* Nat Commun. 2019 May 15;10(1):2176.
 
[Fast and flexible bacterial genomic epidemiology with PopPUNK.](https://www.ncbi.nlm.nih.gov/pubmed/30679308)
Lees JA, Harris SR, Tonkin-Hill G, Gladstone RA, Lo SW, Weiser JN, Corander J, Bentley SD, Croucher NJ. Genome Res. 2019 Feb;29(2):304-316.
 
[Dense genomic sampling identifies highways of pneumococcal recombination.](https://europepmc.org/article/MED/24509479)
Chewapreecha C, Harris SR, Croucher NJ, Turner C, Marttinen P *et al*. Nature genetics 2014;46;3;305-309.
 
[Population genomics of post-vaccine changes in pneumococcal epidemiology.](https://europepmc.org/article/MED/23644493)
Croucher NJ, Finkelstein JA, Pelton SI, Mitchell PK, Lee GM *et al*.
Nature genetics 2013;45;6;656-63.
 
[Whole-genome sequencing for analysis of an outbreak of meticillin-resistant Staphylococcus aureus: a descriptive study.](https://europepmc.org/article/MED/23158674) Harris SR, Cartwright EJ, Török ME, Holden MT, Brown NM *et al*.
The Lancet. Infectious diseases 2013;13;2;130-6.
 
[Rapid pneumococcal evolution in response to clinical interventions.](https://europepmc.org/article/MED/21273480) Croucher NJ, Harris SR, Fraser C, Quail MA, Burton J *et al*. Science 2011;331;6016;430-4.
 
[Evolution of MRSA during hospital transmission and intercontinental spread.](https://europepmc.org/article/MED/20093474)
Harris SR, Feil EJ, Holden MT, Quail MA, Nickerson EK *et al*.
Science 2010;327;5964;469-74.
 
[More publications](https://scholar.google.co.uk/citations?user=rywPBOQAAAAJ&hl=en)

## Funders
- [Bill and Melinda Gates foundation](http://www.gatesfoundation.org/)
- [Meningitis Research Foundation](https://www.meningitis.org) 
- [Biotechnology and Biological Sciences Research Council](https://bbsrc.ukri.org/)
- [Medical Research Council](https://mrc.ukri.org/)
- [Wellcome](https://wellcome.ac.uk/) 

## Contacts
- [Stephen Bentley](mailto:sdb@sanger.ac.uk)
- [GPS] (gps@pneumogen.net)
- [JUNO] (juno@sanger.ac.uk)
