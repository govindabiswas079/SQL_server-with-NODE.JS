UPDATE
    [dbo].[jobsD]
SET
    [Name] = @Name,
    [Position] = @Position,
    [Office] = @Office,
    [Salary] = @Salary
WHERE
    [Id] = @Id
SELECT
    [Id],
    [Name],
    [Position],
    [Office],
    [Salary]
FROM
    [dbo].[jobsD]
WHERE
    [Id] = @Id