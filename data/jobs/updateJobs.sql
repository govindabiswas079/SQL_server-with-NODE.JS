UPDATE
    [dbo].[jobsD]
SET
    [Name] = @Name,
    [Position] = @Position,
    [Office] = @Office,
    [Salary] = @Salary,
    [currentDate] = @currentDate
WHERE
    [Id] = @Id
SELECT
    [Id],
    [Name],
    [Position],
    [Office],
    [Salary],
    [currentDate]
FROM
    [dbo].[jobsD]
WHERE
    [Id] = @Id